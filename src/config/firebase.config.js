import {getApp,getApps, initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk2nw7fK8sWctmEVjVFAO5_vZslcvRMPI",
  authDomain: "resume-builder-87bb5.firebaseapp.com",
  projectId: "resume-builder-87bb5",
  storageBucket: "resume-builder-87bb5.appspot.com",
  messagingSenderId: "1083894407674",
  appId: "1:1083894407674:web:6b8a29096863edf2750443"
};


const app = getApps.length>0 ?getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db}



