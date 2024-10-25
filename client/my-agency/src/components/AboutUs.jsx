import React from 'react';
import { FaUserTie, FaLaptopCode, FaBullhorn } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="p-10 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg">
      <h2 className="text-5xl font-extrabold text-center mb-10 tracking-wide">
        About Us
      </h2>

      <p className="text-xl text-center mb-8 max-w-4xl mx-auto leading-relaxed">
        We are a passionate team committed to delivering top-quality services and innovative solutions to help our clients succeed. With expertise across technology, marketing, and leadership, we focus on creating lasting success for businesses.
      </p>

      <div className="flex flex-col md:flex-row justify-around gap-8">
        {/* CEO Section */}
        <div className="flex items-center space-x-4 bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <FaUserTie className="text-5xl text-indigo-600" />
          <div>
            <h3 className="text-2xl font-semibold">John Doe</h3>
            <p className="text-sm">CEO - Over 10 years of leadership experience driving innovation and success.</p>
          </div>
        </div>

        {/* CTO Section */}
        <div className="flex items-center space-x-4 bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <FaLaptopCode className="text-5xl text-blue-600" />
          <div>
            <h3 className="text-2xl font-semibold">Jane Smith</h3>
            <p className="text-sm">CTO - Expert in software development and cloud technologies.</p>
          </div>
        </div>

        {/* Marketing Director Section */}
        <div className="flex items-center space-x-4 bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <FaBullhorn className="text-5xl text-pink-600" />
          <div>
            <h3 className="text-2xl font-semibold">Emily Johnson</h3>
            <p className="text-sm">Marketing Director - Focuses on brand growth and customer engagement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
