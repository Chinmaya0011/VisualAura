import React from 'react';
import { FaBullseye, FaLightbulb, FaHandsHelping, FaStar, FaUserFriends } from 'react-icons/fa';
import { GiRocket } from 'react-icons/gi';

const AboutUs = () => {
  return (
    <section className="py-16 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">About Us</h2>
      <p className="text-lg mb-6 text-gray-600 max-w-3xl mx-auto">
        At [Your Company Name], we deliver innovative solutions to empower businesses and drive success.
      </p>

      {/* Mission and Vision Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {/* Mission Card */}
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
          <FaBullseye className="text-4xl mb-3 text-blue-600" />
          <h3 className="text-2xl font-semibold mb-1 text-gray-800">Mission</h3>
          <p className="text-gray-600">Empowering businesses with cutting-edge technology.</p>
        </div>

        {/* Vision Card */}
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
          <FaLightbulb className="text-4xl mb-3 text-yellow-600" />
          <h3 className="text-2xl font-semibold mb-1 text-gray-800">Vision</h3>
          <p className="text-gray-600">Inspiring innovation to lead the tech industry.</p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-8 max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Values</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
            <FaHandsHelping className="text-4xl mb-3 text-green-600" />
            <p className="text-gray-600 text-center">Integrity: Honesty in all interactions.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
            <FaStar className="text-4xl mb-3 text-yellow-500" />
            <p className="text-gray-600 text-center">Excellence: Committed to the highest quality.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
            <GiRocket className="text-4xl mb-3 text-red-600" />
            <p className="text-gray-600 text-center">Innovation: Continuously improving our solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
