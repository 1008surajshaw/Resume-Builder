import React from 'react';
import rightArrow from "../../assets/right-arrow.svg";
import { GoogleAuthProvider, GithubAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from '../../config/firebase.config';

interface AuthButtonWithProviderProps {
  Icon: string;
  label: string;
  providers: "GoogleAuthProvider" | "GithubAuthProvider";
}

const AuthButtonWithProvider: React.FC<AuthButtonWithProviderProps> = ({ Icon, label, providers }) => {
  const handleClick = async () => {
    try {
      switch (providers) {
        case "GoogleAuthProvider":
          await signInWithRedirect(auth, new GoogleAuthProvider());
          break;
        case "GithubAuthProvider":
          await signInWithRedirect(auth, new GithubAuthProvider());
          break;
        default:
          console.log("Insert the Google Auth");
          break;
      }
    } catch (err: any) {
      console.log(`Error : ${err.message}`);
    }
  };

  return (
    <div onClick={handleClick} className='w-full px-4 py-3 rounded-md border-2 border-blue-700 flex items-center justify-between cursor-pointer group hover:bg-blue-700 duration-150 hover:shadow-md hover:scale-95'>
      <img src={Icon} height={30} width={30} className="group-hover:text-white" alt="auth-icon" />
      <p className='text-primary group-hover:text-white'>{label}</p>
      <img src={rightArrow} height={20} width={20} className='text-base group-hover:text-white' alt="right-arrow" />
    </div>
  );
};

export default AuthButtonWithProvider;
