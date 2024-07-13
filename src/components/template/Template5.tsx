import React from 'react';

const Template5: React.FC = () => {
  return (
    <div className="bg-gray-100 p-10 flex justify-center">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col p-8">
          <div className="flex justify-between items-center border-b pb-6 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Dani Schwaiger</h1>
              <p className="text-gray-600">Web Developer</p>
            </div>
            <img
              src="path_to_your_image" 
              alt="Dani Schwaiger"
              className="rounded-full w-24 h-24"
            />
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Contact</h2>
              <p className="text-gray-600 mt-2"><i className="fas fa-phone-alt"></i> 123-456-7890</p>
              <p className="text-gray-600 mt-2"><i className="fas fa-envelope"></i> info@reallygreatsite.com</p>
              <p className="text-gray-600 mt-2"><i className="fas fa-map-marker-alt"></i> 123 Anywhere St., Any City</p>
              <p className="text-gray-600 mt-2"><i className="fas fa-globe"></i> reallygreatsite.com</p>
            </div>
            <div className="col-span-2">
              <h2 className="text-xl font-semibold text-gray-800">Profile</h2>
              <p className="text-gray-600 mt-2">I am a qualified and professional web developer with five years of experience in database administration and website design. Strong creative and analytical skills. Team player with an eye for detail.</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Web Design</li>
                <li>Design Thinking</li>
                <li>Wireframe Creation</li>
                <li>Front End Coding</li>
                <li>Problem-Solving</li>
                <li>Computer Literacy</li>
                <li>Project Management Tools</li>
                <li>Strong Communication</li>
              </ul>
            </div>
            <div className="col-span-2">
              <h2 className="text-xl font-semibold text-gray-800">Experience</h2>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-800">Applications Developer</h3>
                <p className="text-gray-600">Really Great Company<br />2016 - Present</p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>Database administration and website design</li>
                  <li>Built the logic for a streamlined advertising platform that scaled</li>
                  <li>Educational institutions and online classroom management</li>
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-800">Web Content Manager</h3>
                <p className="text-gray-600">Really Great Company<br />2014 - 2016</p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>Database administration and website design</li>
                  <li>Built the logic for a streamlined advertising platform that scaled</li>
                  <li>Educational institutions and online classroom management</li>
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-800">Analysis Content</h3>
                <p className="text-gray-600">Really Great Company<br />2010 - 2014</p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>Database administration and website design</li>
                  <li>Built the logic for a streamlined advertising platform that scaled</li>
                  <li>Educational institutions and online classroom management</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Education</h2>
              <p className="text-gray-600 mt-2">Secondary School<br />Really Great High School<br />2010 - 2014</p>
              <p className="text-gray-600 mt-2">Bachelor of Technology<br />Really Great University<br />2014 - 2016</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template5;
