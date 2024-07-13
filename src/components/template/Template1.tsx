import React from "react";
import { formData } from "../../../src/Data/data";

const Template1: React.FC = () => {
  const borderColor = "#1E88E5"
  const background = "#64B5F6"
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="md:w-1/3   p-4" style={{ borderRight: `2px solid ${borderColor}`,  backgroundColor:`${background}`}}>
            <div className="text-center">
              <img
                src="path_to_image"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h1 className="text-3xl font-bold mt-4">
                {formData.personalDetails.name}
              </h1>
              <p className="text-black">
                {formData.personalDetails.profession}
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold   pb-2 style={{ borderBottom: `2px solid ${borderColor}` }}">
                Contact
              </h2>
              <p className="mt-4">
                <strong>Phone:</strong> {formData?.personalDetails?.mobile}
              </p>
              <p className="mt-2">
                <strong>Email:</strong> {formData?.personalDetails?.email}
              </p>
              <p className="mt-2">
                <strong>Address:</strong> {formData?.personalDetails?.city}
              </p>
              <p className="mt-2">
                <strong>LinkedIn:</strong> {formData?.personalDetails?.linkedInLink}
              </p>
              <p className="mt-2">
                <strong>personal Portfolio:</strong> {formData?.personalDetails?.personalPortfolio}
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold  pb-2 style={{ borderBottom: `2px solid ${borderColor}` }}">
                Education
              </h2>
              {formData.education && formData.education.length > 0 && (
                formData.education.map((edu, index) => (
                  <div key={index} className="mt-4">
                    <p>
                      <strong>{edu.qualifyingYear}</strong> - {edu.degreeObtained}
                      <br />
                      {edu.universityAttended}
                    </p>
                  </div>
                ))
              ) }
            </div>
            <div className="mt-8">
              <ul className="mt-4 list-disc list-inside">
                <h2 className="text-xl font-semibold   pb-2 style={{ borderBottom: `2px solid ${borderColor}` }}">
                  Expertise
                </h2>
                {formData.skills && formData.skills.length > 0 ? (
                  formData.skills.map((skill, index) => (
                    <li key={index}>{skill.skillTitle}</li>
                  ))
                ) : (
                  <li>No skills data available.</li>
                )}
              </ul>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold  pb-2 "style={{ borderBottom: `2px solid ${borderColor}` }}>
                Language
              </h2>
              {formData.personalDetails.languages &&
              formData.personalDetails.languages.length > 0 && (
                formData.personalDetails.languages.map((language, idx) => (
                  <div className="mt-8" key={idx}>
                    <li>{language}</li>
                  </div>
                ))
              ) }
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-2/3 p-4 flex flex-col justify-center">
          <div className="mt-8">
              <h2 className="text-xl font-semibold  pb-2" style={{ borderBottom: `2px solid ${borderColor}` }}>
                Description
              </h2>
              <h3 className="mt-8">
                {formData.personalDetails.description}
              </h3>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold  pb-2" style={{ borderBottom: `2px solid ${borderColor}` }}>
                Experience
              </h2>
              {formData.workExperience &&
                formData.workExperience.length > 0 &&
                formData.workExperience.map((experience, index) => (
                  <div className="mt-8" key={index}>
                    <h3 className="text-lg font-semibold">
                      {experience.startingDateOfEmployment} - {experience.endDateOfEmployment}
                    </h3>
                    <h4 className="text-md font-semibold">
                      {experience.companyName}
                    </h4>
                    <p className="text-gray-600 mt-1">{experience.jobTitle}</p>
                    <p className="mt-2 text-gray-700">
                      {experience.jobDescriptionAndResponsibilities}
                    </p>
                  </div>
                ))}
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold pb-2" style={{ borderBottom: `2px solid ${borderColor}` }}>
                Projects
              </h2>
              {formData.projects && formData.projects.length > 0 && (
                formData.projects.map((project, index) => (
                  <div className="mt-8" key={index}>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="mt-2 text-gray-700">{project.description}</p>
                  </div>
                ))
              ) }
            </div>

            <div className="mt-8">
              {formData.achievements && formData.achievements.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold  pb-2" style={{ borderBottom: `2px solid ${borderColor}` }}>Achievements</h2>
                  {formData.achievements.map((achievement, index) => (
                    <div key={index} className="mt-4">
                      <h4 className="text-lg font-semibold">{achievement.title}</h4>
                      <p className="text-gray-700">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              )}
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
