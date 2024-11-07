import React from 'react';
import { FaBullseye, FaLightbulb, FaHandsHelping, FaStar, FaUserFriends } from 'react-icons/fa';
import { GiRocket } from 'react-icons/gi';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-8 text-gray-900">About Us</h2>
      <p className="text-lg mb-12 text-gray-700 max-w-2xl mx-auto">
        At [Your Company Name], we deliver innovative solutions to empower businesses and drive success.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto px-4">
        {/* Mission Card */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 shadow-2xl rounded-lg p-8 flex flex-col items-center">
          <FaBullseye className="text-5xl mb-4 text-white" />
          <h3 className="text-3xl font-semibold mb-4 text-white">Mission</h3>
          <p className="text-lg text-white">Empowering businesses with cutting-edge technology.</p>
        </div>

        {/* Vision Card */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl rounded-lg p-8 flex flex-col items-center">
          <FaLightbulb className="text-5xl mb-4 text-white" />
          <h3 className="text-3xl font-semibold mb-4 text-white">Vision</h3>
          <p className="text-lg text-white">Inspiring innovation to lead the tech industry.</p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-12 max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-4 text-gray-900">Our Values</h3>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="bg-gradient-to-r from-indigo-500 to-blue-600 shadow-2xl rounded-lg p-8 flex flex-col items-center">
            <FaHandsHelping className="text-5xl mb-4 text-white" />
            <p className="text-lg text-white text-center">Integrity: Honesty in all interactions.</p>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-purple-500 shadow-2xl rounded-lg p-8 flex flex-col items-center">
            <FaStar className="text-5xl mb-4 text-white" />
            <p className="text-lg text-white text-center">Excellence: Committed to the highest quality.</p>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-red-500 shadow-2xl rounded-lg p-8 flex flex-col items-center">
            <GiRocket className="text-5xl mb-4 text-white" />
            <p className="text-lg text-white text-center">Innovation: Continuously improving our solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
