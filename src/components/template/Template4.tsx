import React from 'react';

const Template4: React.FC = () => {
  return (
    <div className="bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex">
          <div className="w-1/3 bg-gray-800 text-white p-5">
            <div className="text-center">
              <img
                src="path_to_your_image" // Replace with the actual image path
                alt="Noel Taylor"
                className="rounded-full w-32 h-32 mx-auto"
              />
              <h2 className="text-2xl font-bold mt-4">NOEL TAYLOR</h2>
              <p className="text-sm">GRAPHIC & WEB DESIGNER</p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold">CONTACT ME</h3>
              <p className="mt-2"><i className="fas fa-phone-alt"></i> +1 234-567-890</p>
              <p className="mt-2"><i className="fas fa-envelope"></i> youremail@website.com</p>
              <p className="mt-2"><i className="fas fa-globe"></i> www.yourwebsite.com</p>
              <p className="mt-2"><i className="fas fa-map-marker-alt"></i> 789, Prudence Ln, Lincoln Park, MI</p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold">EDUCATION</h3>
              <p className="mt-2">STANFORD UNIVERSITY<br /><span className="text-sm">Master Degree Graduate<br />2013 - 2015</span></p>
              <p className="mt-2">UNIVERSITY OF CHICAGO<br /><span className="text-sm">Bachelor Degree Graduate<br />2007 - 2010</span></p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold">REFERENCES</h3>
              <p className="mt-2">DARWIN R. MAGANA<br /><span className="text-sm">+1 390-434-3890<br />email@yourwebsite.com</span></p>
              <p className="mt-2">ROBERT J. BELVIN<br /><span className="text-sm">+1 390-487-3903<br />email@yourwebsite.com</span></p>
            </div>
          </div>
          <div className="w-2/3 p-5">
            <div className="mb-6">
              <h2 className="text-3xl font-bold border-b-4 border-gray-800 pb-2 inline-block">ABOUT ME</h2>
              <p className="mt-4 text-sm">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold border-b-4 border-gray-800 pb-2 inline-block">JOB EXPERIENCE</h2>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">SENIOR WEB DESIGNER</h3>
                <p className="text-sm">Creative Agency / Chicago<br />2020 - Present</p>
                <p className="mt-2 text-sm">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">GRAPHIC DESIGNER</h3>
                <p className="text-sm">Creative Moulder / Chicago<br />2015 - 2020</p>
                <p className="mt-2 text-sm">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">MARKETING MANAGER</h3>
                <p className="text-sm">Manufacturing Agency / NJ<br />2013 - 2015</p>
                <p className="mt-2 text-sm">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold border-b-4 border-gray-800 pb-2 inline-block">SKILLS</h2>
              <div className="mt-4">
                <p className="text-sm">Adobe Photoshop</p>
                <div className="w-full bg-gray-200 h-1">
                  <div className="bg-blue-600 h-1" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm">Adobe Illustrator</p>
                <div className="w-full bg-gray-200 h-1">
                  <div className="bg-blue-600 h-1" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm">Microsoft Office</p>
                <div className="w-full bg-gray-200 h-1">
                  <div className="bg-blue-600 h-1" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm">Microsoft Powerpoint</p>
                <div className="w-full bg-gray-200 h-1">
                  <div className="bg-blue-600 h-1" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold border-b-4 border-gray-800 pb-2 inline-block">LANGUAGE</h2>
              <div className="mt-4">
                <p className="text-sm">English</p>
                <div className="w-full bg-gray-200 h-1">
                  <div className="bg-blue-600 h-1" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm">Spanish</p>
                <div className="w-full bg-gray-200 h-1">
                  <div className="bg-blue-600 h-1" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm">French</p>
                <div className="w-full bg-gray-200 h-1">
                  <div className="bg-blue-600 h-1" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm">German</p>
                <div className="w-full bg-gray-200 h-1">
                  <div className="bg-blue-600 h-1" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold border-b-4 border-gray-800 pb-2 inline-block">HOBBIES</h2>
              <div className="mt-4 flex">
                <div className="mr-4">
                  <i className="fas fa-book text-2xl"></i>
                  <p className="text-sm">Reading Books</p>
                </div>
                <div className="mr-4">
                  <i className="fas fa-plane text-2xl"></i>
                  <p className="text-sm">Traveling</p>
                </div>
                <div className="mr-4">
                  <i className="fas fa-chess text-2xl"></i>
                  <p className="text-sm">Playing Chess</p>
                </div>
              </div>
            </div>
          </div>

          </div>
          </div>
          </div>

          )
}
export default Template4