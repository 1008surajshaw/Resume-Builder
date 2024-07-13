// Resume.tsx
import React from 'react';
import { formData } from '../../../src/Data/data';
const Template2: React.FC = () => {
  const borderColor = "#1E88E5"

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="md:w-1/3  p-4" style={{ borderRight: `2px solid ${borderColor}` }}>
          <div className="text-center mb-6">
            <img
              src={formData.personalDetails.image || 'path_to_placeholder_image'}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto"
            />
            <h1 className="text-2xl font-bold mt-4">{formData.personalDetails.name}</h1>
            <p className="text-gray-600">{formData.personalDetails.profession}</p>
            <p className="text-orange-500 mt-2">{formData.personalDetails.mobile}</p>
            <p className="text-gray-600">{formData.personalDetails.email}</p>
            <p className="text-gray-600">{formData.personalDetails.personalPortfolio}</p>
            <p className="text-gray-600">{formData.personalDetails.linkedInLink}</p>

          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Summary</h2>
            <p className="mt-2 text-gray-700">{formData.personalDetails.description}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Tech Skills</h2>
            <div className="mt-2">
              {formData.skills.map((skill, index) => (
                <div key={index}>
                  <p className="text-gray-700">{skill.skillTitle}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: `${1 * 100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Languages</h2>
            <div className="mt-2">
              {formData.personalDetails.languages && formData.personalDetails.languages.map((language, index) => (
                <p key={index} className="text-gray-700">{language}</p>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Education</h2>
            {formData.education.map((edu, index) => (
              <div key={index} className="mt-4">
                <p className="text-gray-700">{edu.qualifyingYear} - {edu.degreeObtained}</p>
                <p className="text-gray-600">{edu.universityAttended}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right Column */}
        <div className="md:w-2/3 p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Experience</h2>
          {formData.workExperience && formData.workExperience.map((experience, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800">{experience.jobTitle}</h3>
              <p className="text-gray-600">{experience.startingDateOfEmployment} to {experience.endDateOfEmployment}</p>
              <p className="text-gray-600">{experience.companyName}</p>
              <p className="text-gray-700 mt-2">{experience.jobDescriptionAndResponsibilities}</p>
            </div>
          ))}
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-6">Projects</h2>
          {formData.projects && formData.projects.map((project, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-700 mt-2">{project.description}</p>
            </div>
          ))}
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-6">Achievements</h2>
          {formData.achievements && formData.achievements.map((achievement, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800">{achievement.title}</h3>
              <p className="text-gray-700 mt-2">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Template2;
