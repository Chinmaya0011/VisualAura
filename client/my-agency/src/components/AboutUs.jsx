import React from 'react';
import { FaBullseye, FaLightbulb, FaHistory, FaHandsHelping, FaStar, FaUserFriends } from 'react-icons/fa';
import { GiAchievement, GiRocket } from 'react-icons/gi'; // Changed GiInnovation to GiRocket
import { MdBusiness } from 'react-icons/md';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-8 text-gray-900">About Us</h2>
      <p className="text-lg mb-12 text-gray-700 max-w-2xl mx-auto">
        At [Your Company Name], we are passionate about delivering innovative solutions that empower businesses and drive growth. Our dedicated team of professionals works tirelessly to transform ideas into reality.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto px-4">

        {/* Mission Card */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 shadow-2xl rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center">
          <FaBullseye className="text-5xl mb-4 text-white" />
          <h3 className="text-3xl font-semibold mb-4 text-white">Our Mission</h3>
          <p className="text-lg text-white">
            Our mission is to empower businesses with cutting-edge technology solutions that drive growth and success. We strive to create value for our clients through innovative thinking and a commitment to excellence.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center">
          <FaLightbulb className="text-5xl mb-4 text-white" />
          <h3 className="text-3xl font-semibold mb-4 text-white">Our Vision</h3>
          <p className="text-lg text-white">
            Our vision is to be the leading provider of technology solutions that inspire innovation and transform industries. We envision a future where our solutions enhance the efficiency and effectiveness of businesses worldwide.
          </p>
        </div>
      </div>

      {/* Company History Section */}
      <div className="mt-12 max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-4 text-gray-900">Our History</h3>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="bg-gradient-to-r from-orange-400 to-yellow-500 shadow-2xl rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center">
            <GiAchievement className="text-5xl mb-4 text-white" />
            <p className="text-lg text-white text-center">
              Founded in [Year], [Your Company Name] started with a simple mission: to make technology accessible and beneficial for businesses of all sizes. Over the years, we have evolved into a trusted partner for organizations across various sectors, providing innovative solutions that drive success.
            </p>
          </div>
          <div className="bg-gradient-to-r from-yellow-500 to-red-500 shadow-2xl rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center">
            <FaHistory className="text-5xl mb-4 text-white" />
            <p className="text-lg text-white text-center">
              Our journey has been marked by continuous growth, learning, and adaptation. With each challenge, we have forged deeper connections with our clients and adapted our strategies to meet their evolving needs.
            </p>
          </div>
        </div>
      </div>

      {/* Company Values Section */}
      <div className="mt-12 max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-4 text-gray-900">Our Values</h3>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="bg-gradient-to-r from-indigo-500 to-blue-600 shadow-2xl rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center">
            <FaHandsHelping className="text-5xl mb-4 text-white" />
            <p className="text-lg text-white text-center">
              <strong>Integrity:</strong> We uphold the highest standards of honesty and transparency in our interactions.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-purple-500 shadow-2xl rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center">
            <FaStar className="text-5xl mb-4 text-white" />
            <p className="text-lg text-white text-center">
              <strong>Excellence:</strong> We are committed to delivering the highest quality in every project we undertake.
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center">
            <MdBusiness className="text-5xl mb-4 text-white" />
            <p className="text-lg text-white text-center">
              <strong>Collaboration:</strong> We believe in the power of teamwork and working together to achieve common goals.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8 mt-4">
          <div className="bg-gradient-to-r from-pink-500 to-red-500 shadow-2xl rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center">
            <GiRocket className="text-5xl mb-4 text-white" />
            <p className="text-lg text-white text-center">
              <strong>Customer Focus:</strong> Our clients are at the heart of everything we do, and we strive to exceed their expectations.
            </p>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-orange-400 shadow-2xl rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center">
            <FaUserFriends className="text-5xl mb-4 text-white" />
            <p className="text-lg text-white text-center">
              <strong>Innovation:</strong> We embrace change and continuously seek new ways to improve our solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
