import React, { useState } from 'react';
import { useUserStore } from '../../store/userStore';
import Footer from '../../components/footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { fetchUserDetails } = useUserStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const clickHandler = async () => {
    console.log("One")
    setLoading(true);
    try {
      console.log("two")
      const result = await fetchUserDetails();
      console.log(result)
      console.log("three")
      //@ts-ignore
      if (result.providerData[0].email) {
        navigate("/dashboard", { replace: true });
      } else {
        navigate("/auth", { replace: true });
      }
    } catch (err) {
      console.error(err);
      navigate("/auth", { replace: true }); 
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader"></div> 
      </div>
    );
  }

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Understand User Flow.
            <span className="sm:block"> Increase Conversion. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            No need to for get authoriz just simply generate a resume 
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              onClick={clickHandler}
            >
              Get Started
            </button>

            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="/dashboard"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
