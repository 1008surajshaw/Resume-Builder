// Template3.tsx
import React from 'react';

const Template3: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-4">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold mt-4">Jill Morgan</h1>
              <p className="text-lg text-gray-600">Sales Representative</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Contact</h2>
              <p className="mt-2"><strong>Phone:</strong> 212-555-0104</p>
              <p className="mt-2"><strong>Email:</strong> jill.morgan@xyz.com</p>
              <p className="mt-2"><strong>LinkedIn:</strong> linkedin.com/in/jillmorganxyz</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Education</h2>
              <p className="mt-2">BSc in Marketing, Major in Professional Sales</p>
              <p className="text-gray-600">Penn State University, Philadelphia, PA</p>
              <p className="text-gray-600">Relevant Coursework: Professional Selling, Sales Management, Advanced Sales & Selling Techniques, Cloud-Based CRM Strategies</p>
              <p className="text-gray-600"><strong>Minor:</strong> Leadership & Communication</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>Lead Qualification & Prospecting</li>
                <li>Salesforce & Hubspot CRM</li>
                <li>Optimizing MRR</li>
                <li>Contract Negotiation</li>
              </ul>
            </div>
          </div>
          <div className="md:w-2/3 p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Experience</h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Senior Sales Representative</h3>
              <p className="text-gray-600">2018 - present</p>
              <p className="text-gray-600">McKinsey Industrial Supplies, Brooklyn, NY</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Managed organizational goals and group of sales representatives in selling industrial equipment and maintaining large construction and contractor business relationships.</li>
                <li>Worked with the data analysis team to develop sales targets based on extensive market research and analysis.</li>
                <li>Tracked individual sales rep sales goals and individually mentored any representative deemed to be falling behind.</li>
                <li>Managed largest 15 corporate construction and industrial client accounts.</li>
                <li><strong>Key Achievement:</strong> Achieved over $500,000 in sales in each fiscal quarter from 2019.</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Customer Relationship Officer</h3>
              <p className="text-gray-600">2016 - 2018</p>
              <p className="text-gray-600">XYZ Inc., Philadelphia, PA</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Acted as liaison between XYZ Inc. and corporate clients to facilitate and maintain healthy business relationships.</li>
                <li>Checked in on clients on a weekly basis to ensure needs are being met and supplies are being filled.</li>
                <li>Managed database of clients and potential leads in a customer relationship management (CRM) program.</li>
                <li><strong>Key Achievement:</strong> Maintained positive and happy client relationships with 15 corporate customers.</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Part-Time Retail Associate</h3>
              <p className="text-gray-600">2014 - 2016</p>
              <p className="text-gray-600">ABC Shopping, Philadelphia, PA</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Assisted customers on the sales floor with questions, advice, and physical issues when requested or upon initiative.</li>
                <li>Operated the POS and credit card machine when front lines call for additional assistance to the checkout lanes.</li>
                <li>Organized shelves, end caps, and bargain bins out on the sales floor.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template3;
