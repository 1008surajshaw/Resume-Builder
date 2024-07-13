import React from 'react';

const Template9 = () => {
  return (
    <div className="max-w-4xl mx-auto p-10 bg-white shadow-lg">
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="col-span-1 bg-gray-100 p-6 rounded-lg">
          <div className="text-center mb-6">
            <img src="profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
            <h2 className="text-xl font-semibold mt-4">SURNAME NAME</h2>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p>+1 222 222 22</p>
            <p>name@gmail.com</p>
            <p>NY, US</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Languages</h3>
            <p>English: Native</p>
            <p>Spanish: Intermediate</p>
            <p>French: Beginner</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Skills</h3>
            <p>Photoshop</p>
            <p>Illustrator</p>
            <p>InDesign</p>
            <p>UI/UX Design</p>
            <p>Prototyping</p>
            <p>Mobile App Design</p>
            <p>Branding</p>
            <p>Web Development</p>
            <p>Typography</p>
            <p>Time Management</p>
            <p>Collaboration</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-2">
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Profile Summary</h3>
            <p>
              A highly motivated and creative graphic designer with 3 years of experience in delivering visually appealing designs for various clients. Seeking a challenging position in a dynamic and innovative design agency to utilize my skills and expertise in creating compelling visual solutions.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Experiences</h3>
            <div className="mb-4">
              <h4 className="font-semibold">Senior Graphic Designer | CreateNOW</h4>
              <p>20XX (NY, USA)</p>
              <ul className="list-disc list-inside">
                <li>Led a team of 3 designers to conceptualize and execute design projects.</li>
                <li>Successfully managed multiple projects simultaneously, meeting tight deadlines.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Freelance Designer | Self-employed</h4>
              <p>20XX (NY, USA)</p>
              <ul className="list-disc list-inside">
                <li>Independently handled design projects for various local businesses, such as creating logos and posters.</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Education</h3>
            <div className="mb-4">
              <h4 className="font-semibold">Masters in Design | NYU</h4>
              <p>20XX (NY, USA)</p>
            </div>
            <div>
              <h4 className="font-semibold">Bachelor of Fine Arts | NYU</h4>
              <p>20XX (NY, USA)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template9;
