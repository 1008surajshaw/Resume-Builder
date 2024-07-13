import { create } from 'zustand';
import { onSnapshot, doc } from 'firebase/firestore';
import { auth, db } from '../config/firebase.config';

interface UserState {
  user: any | null;
  setUser: (user: any) => void;
  clearUser: () => void;
  fetchUserDetails: () => Promise<any>; 
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  fetchUserDetails: () => {
    return new Promise<any>((resolve, reject) => {
      const unsubscribeAuth = auth.onAuthStateChanged((userCred) => {
        if (userCred) {
          const userData = userCred.providerData[0];
          set({ user: userData }); 

          const userDocRef = doc(db, 'users', userCred.uid);
          const unsubscribeSnapshot = onSnapshot(userDocRef, (docSnapshot) => {
            if (docSnapshot.exists()) {
              set((state) => ({
                user: { ...state.user, ...docSnapshot.data() }, 
              }));
            }
          });

          console.log(userCred, "user data");
          resolve(userCred);
        } else {
          set({ user: null });
          reject(new Error("User is not authenticated"));
        }
        unsubscribeAuth();
      });
    });
  },
}));
