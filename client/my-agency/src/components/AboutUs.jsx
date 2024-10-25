import React from 'react';
import { FaBullseye, FaLightbulb, FaHandsHelping, FaStar, FaUserFriends } from 'react-icons/fa';
import { GiAchievement, GiRocket } from 'react-icons/gi';
import { MdBusiness } from 'react-icons/md';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-8 text-gray-900">About Us</h2>
      <p className="text-lg mb-12 text-gray-700 max-w-2xl mx-auto">
        At [Your Company Name], we are committed to delivering innovative solutions that empower businesses. Our team transforms ideas into reality.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto px-4">
        {/* Mission Card */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 shadow-2xl rounded-lg p-8 flex flex-col items-center">
          <FaBullseye className="text-5xl mb-4 text-white" />
          <h3 className="text-3xl font-semibold mb-4 text-white">Our Mission</h3>
          <p className="text-lg text-white">
            To empower businesses with cutting-edge technology that drives growth and success.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl rounded-lg p-8 flex flex-col items-center">
          <FaLightbulb className="text-5xl mb-4 text-white" />
          <h3 className="text-3xl font-semibold mb-4 text-white">Our Vision</h3>
          <p className="text-lg text-white">
            To be the leading provider of technology solutions that inspire innovation worldwide.
          </p>
        </div>
      </div>

      {/* Company Values Section */}
      <div className="mt-12 max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-4 text-gray-900">Our Values</h3>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="bg-gradient-to-r from-indigo-500 to-blue-600 shadow-2xl rounded-lg p-8 flex flex-col items-center">
            <FaHandsHelping className="text-5xl mb-4 text-white" />
            <p className="text-lg text-white text-center">
              <strong>Integrity:</strong> Honesty and transparency in all interactions.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-purple-500 shadow-2xl rounded-lg p-8 flex flex-col items-center">
            <FaStar className="text-5xl mb-4 text-white" />
            <p className="text-lg text-white text-center">
              <strong>Excellence:</strong> Committed to the highest quality in every project.
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl rounded-lg p-8 flex flex-col items-center">
            <MdBusiness className="text-5xl mb-4 text-white" />
            <p className="text-lg text-white text-center">
              <strong>Collaboration:</strong> Power of teamwork to achieve common goals.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8 mt-4">
          <div className="bg-gradient-to-r from-pink-500 to-red-500 shadow-2xl rounded-lg p-8 flex flex-col items-center">
            <GiRocket className="text-5xl mb-4 text-white" />
            <p className="text-lg text-white text-center">
              <strong>Customer Focus:</strong> Clients are at the heart of what we do.
            </p>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-orange-400 shadow-2xl rounded-lg p-8 flex flex-col items-center">
            <FaUserFriends className="text-5xl mb-4 text-white" />
            <p className="text-lg text-white text-center">
              <strong>Innovation:</strong> Embracing change to improve our solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
