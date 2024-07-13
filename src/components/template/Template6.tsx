import React from 'react';

const Template6: React.FC = () => {
  return (
    <div className="bg-gray-100 p-10 flex justify-center">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 gap-8 p-8">
          <div className="col-span-1 bg-yellow-500 p-6 text-white">
            <img
              src="path_to_your_image" 
              alt="James Christopher"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold text-center">JAMES <span className="text-black">CHRISTOPHER</span></h1>
            <p className="text-center mt-2">Creative Designer</p>
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Contacts</h2>
              <p className="mt-2"><i className="fas fa-phone-alt"></i> +012 456 7896</p>
              <p className="mt-2"><i className="fas fa-envelope"></i> person@domain.com</p>
              <p className="mt-2"><i className="fas fa-map-marker-alt"></i> 123 Dummy Street, New York</p>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Skills</h2>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Photoshop</li>
                <li>Typography</li>
                <li>Indesign</li>
                <li>Illustrator</li>
                <li>Photography</li>
                <li>Print Design</li>
                <li>Graphic Design</li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 p-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-yellow-500 pb-2">Profile</h2>
              <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-yellow-500 pb-2">Work Experience</h2>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">Graphic Designer</h3>
                <p className="text-gray-600">Company Name<br />2011 - 2014</p>
                <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">SR. Graphic Designer</h3>
                <p className="text-gray-600">Company Name<br />2014 - 2016</p>
                <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">Creative Director</h3>
                <p className="text-gray-600">Company Name<br />2016 - Present</p>
                <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-yellow-500 pb-2">Education</h2>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">Diploma in Graphic Design</h3>
                <p className="text-gray-600">University of Name, US<br />2004</p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">Bachelor of Fine Arts</h3>
                <p className="text-gray-600">University of Name, New York<br />2008</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template6;
