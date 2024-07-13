import React from "react";

const Template7 = () => {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <header className="text-center">
        <h1 className="text-4xl font-bold">John Doe</h1>
        <p className="text-lg">john@johndoe.com | +1 333-333-3333</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-500">
            @github
          </a>
          <a href="#" className="text-blue-500">
            @linkedin
          </a>
        </div>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">
          Education
        </h2>
        <div className="mt-4">
          <p className="font-semibold">
            Master of Engineering (Thesis) - Mechanical
          </p>
          <p>Rand University, Sep 2018 - Apr 2021</p>
          <p className="font-semibold mt-2">
            Bachelor of Engineering - Mechanical
          </p>
          <p>Rand University, Sep 2013 - Apr 2018</p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">
          Skills
        </h2>
        <div className="mt-4">
          <p className="font-semibold">Programming Languages</p>
          <p>Python | Java | C++ | C | C# | JavaScript | MATLAB | Simulink</p>
          <p className="font-semibold mt-2">Technologies</p>
          <p>
            ANSYS SCADE/C/C++ | Azure AD | Docker | React.js | Flask | Node.js |
            Spring | Android | ROS
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">
          Experience
        </h2>
        <div className="mt-4">
          <div className="mb-6">
            <p className="font-semibold">Graduate Research Assistant</p>
            <p>Rand University, Sep 2018 - Apr 2021</p>
            <ul className="list-disc list-inside">
              <li>
                Developed modifications to an aquaculture-based control system
                that optimizes controlled aquaponics parameters for maximum
                productivity and energy efficiency.
              </li>
              <li>
                Implemented and validated control strategies in simulated
                environments.
              </li>
              <li>
                Analyzed and debugged Simulink/C++ code and ROS for features,
                prototype implementation and integrated testing.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="font-semibold">Software Simulation Intern</p>
            <p>RandoSpace Company, Jun 2017 - Dec 2017</p>
            <ul className="list-disc list-inside">
              <li>
                Executed development of simulation tools that perform Monte
                Carlo simulations for the Very Specific Space Mission.
              </li>
              <li>Performed model validation and verification testing.</li>
              <li>
                Evaluated algorithms for the Very Specific Space Mission to
                improve overall mission conditions of the Specific Space.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">
          Notable Projects
        </h2>
        <div className="mt-4">
          <div className="mb-6">
            <p className="font-semibold">RandoSite.com</p>
            <p>Mar 2021 - Sep 2021</p>
            <ul className="list-disc list-inside">
              <li>
                Lead Back-end development team using the Flask and Ruby
                framework for a website that allows users to buy and sell random
                items.
              </li>
              <li>
                Designed and developed RESTful API for communication between
                front-end and back-end applications.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="font-semibold">Full Space Control Dashboard</p>
            <p>Jan 2018 - Apr 2018</p>
            <ul className="list-disc list-inside">
              <li>
                Developed a web and mobile-based application for monitoring the
                health status of a spacecraft during its mission.
              </li>
              <li>
                Designed a system that simulates the system during normal
                operation to ensure optimal performance under high-load
                conditions.
              </li>
              <li>
                Implemented and integrated control systems using ROS,
                JavaScript, and Node.js, which successfully deployed on a Tomcat
                server.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="font-semibold">Weather Forecast Application</p>
            <p>Jun 2019 - Dec 2019</p>
            <ul className="list-disc list-inside">
              <li>
                Developed a web application using React.js and Node.js to
                provide real-time weather forecasts and alerts.
              </li>
              <li>
                Integrated third-party weather API to fetch and display current
                weather data and forecasts.
              </li>
              <li>
                Implemented responsive design to ensure optimal user experience
                on both desktop and mobile devices.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="font-semibold">Automated Testing Framework</p>
            <p>Feb 2020 - May 2020</p>
            <ul className="list-disc list-inside">
              <li>
                Designed and developed an automated testing framework using
                Python and Selenium for web application testing.
              </li>
              <li>
                Created test scripts to automate the testing of critical
                functionalities and improve test coverage.
              </li>
              <li>
                Integrated the testing framework with CI/CD pipeline to enable
                automated testing and reporting.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Template7;
