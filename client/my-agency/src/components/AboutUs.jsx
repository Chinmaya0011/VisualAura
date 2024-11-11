import React, { useState } from 'react';
import { FaBullseye, FaLightbulb, FaHandsHelping, FaStar } from 'react-icons/fa';
import { GiRocket } from 'react-icons/gi';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState('mission');

  const handleButtonClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section className="py-12 px-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-6 drop-shadow-lg">About Us</h2>
        <p className="text-md font-light mb-8 max-w-xl mx-auto">
          At <span className="font-semibold text-white">Visual Aura</span>, we combine creativity and technology to bring unique solutions to life. Our mission is to empower businesses through innovation, fostering growth and enhancing digital presence.
        </p>

        {/* Section Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <button
            onClick={() => handleButtonClick('mission')}
            className={`px-4 py-2 font-semibold rounded-full shadow-md transition-all duration-300 ${
              activeSection === 'mission' ? 'bg-yellow-400 text-black' : 'bg-white text-gray-700 hover:bg-yellow-300 hover:text-black'
            }`}
          >
            Mission
          </button>
          <button
            onClick={() => handleButtonClick('vision')}
            className={`px-4 py-2 font-semibold rounded-full shadow-md transition-all duration-300 ${
              activeSection === 'vision' ? 'bg-yellow-400 text-black' : 'bg-white text-gray-700 hover:bg-yellow-300 hover:text-black'
            }`}
          >
            Vision
          </button>
          <button
            onClick={() => handleButtonClick('values')}
            className={`px-4 py-2 font-semibold rounded-full shadow-md transition-all duration-300 ${
              activeSection === 'values' ? 'bg-yellow-400 text-black' : 'bg-white text-gray-700 hover:bg-yellow-300 hover:text-black'
            }`}
          >
            Our Values
          </button>
        </div>

        {/* Mission Section */}
        {activeSection === 'mission' && (
          <div className="bg-white rounded-xl shadow-lg p-6 text-gray-800 max-w-lg mx-auto mb-6">
            <FaBullseye className="text-3xl text-blue-600 mb-3 mx-auto" />
            <h3 className="text-xl font-bold mb-1">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              At Visual Aura, our mission is to empower our clients with cutting-edge technology and creative solutions. We strive to build tools and strategies that drive meaningful connections, enhance user experiences, and accelerate business growth.
            </p>
          </div>
        )}

        {/* Vision Section */}
        {activeSection === 'vision' && (
          <div className="bg-white rounded-xl shadow-lg p-6 text-gray-800 max-w-lg mx-auto mb-6">
            <FaLightbulb className="text-3xl text-yellow-600 mb-3 mx-auto" />
            <h3 className="text-xl font-bold mb-1">Our Vision</h3>
            <p className="text-gray-600 text-sm">
              Visual Aura aims to be at the forefront of the digital transformation journey. We envision a future where technology and creativity work together seamlessly to inspire innovation, drive impact, and create value for businesses globally.
            </p>
          </div>
        )}

        {/* Our Values Section */}
        {activeSection === 'values' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto mt-4">
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center h-full transform hover:scale-105 transition duration-300">
              <FaHandsHelping className="text-2xl text-green-600 mb-2" />
              <h4 className="text-md font-semibold text-gray-800">Integrity</h4>
              <p className="text-gray-600 text-center text-xs">
                Honesty and transparency in all interactions, building trust and long-term relationships.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center h-full transform hover:scale-105 transition duration-300">
              <FaStar className="text-2xl text-yellow-500 mb-2" />
              <h4 className="text-md font-semibold text-gray-800">Excellence</h4>
              <p className="text-gray-600 text-center text-xs">
                Dedication to high standards, ensuring quality and precision in every project.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center h-full transform hover:scale-105 transition duration-300">
              <GiRocket className="text-2xl text-red-600 mb-2" />
              <h4 className="text-md font-semibold text-gray-800">Innovation</h4>
              <p className="text-gray-600 text-center text-xs">
                Constantly pushing the boundaries to deliver pioneering and impactful solutions.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutUs;
