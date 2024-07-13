import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import AuthButtonWithProvider from '../../components/auth/AuthButtonWithProvider';
import google from "../../assets/google.svg";
import github from "../../assets/github.svg";
import Footer from '../../components/footer';

const Auth: React.FC = () => {
  // const { user, fetchUserDetails } = useUserStore();
  // const navigate = useNavigate();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       await fetchUserDetails();
  //       if (user) {
  //         navigate("/dashboard", { replace: true });
  //       } else {
  //         navigate("/auth", { replace: true });
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUser();
  // }, [fetchUserDetails, user, navigate]);

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <div className="loader"></div> {/* Add your loader component or animation here */}
  //     </div>
  //   );
  // }

  return (
    <div className='w-full flex flex-1 flex-col items-center justify-center gap-6 h-screen'>
      <h1 className='text-3xl lg:text-4xl text-blue-700'>Welcome To Resume Builder</h1>
      <p className='text-base text-gray-600'>Express way to create resume</p>
      <h2 className='text-base text-gray-600'>Authentication</h2>

      <div className='w-full lg:w-96 rounded-md bg-red-100 p-8 flex flex-col items-center justify-start gap-6'>
        <AuthButtonWithProvider Icon={google} label={"Signin with Google"} providers={"GoogleAuthProvider"} />
        <AuthButtonWithProvider Icon={github} label={"Signin with Github"} providers={"GithubAuthProvider"} />
      </div>
    </div>
  );
};

export default Auth;
