import React, { useState, useEffect } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import heroImage from '../assets/heroimg.jpg'; // High-resolution hero image.

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div
      className={`relative min-h-[80vh] bg-cover bg-center transition-opacity duration-700 ease-in-out ${
        imageLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundAttachment: 'fixed', // This creates the parallax effect
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-gray-800 to-purple-600 opacity-60"></div>

      <section className="relative flex flex-col justify-center px-6 py-12 mx-auto sm:py-16 lg:py-32 lg:flex-row lg:justify-between h-full">
        {/* Left Section */}
        <div className="flex flex-col justify-center p-6 text-center lg:text-left lg:max-w-md xl:max-w-lg">
          <h1 className="text-3xl font-extrabold text-white sm:text-2xl leading-tight drop-shadow-xl tracking-tight font-sans">
            Boost Your Business with Online Solutions
          </h1>

          <p className="mt-4 mb-6 text-base text-white sm:mb-12 leading-relaxed tracking-wide max-w-lg mx-auto lg:mx-0">
            Offering web design, development, SEO, and digital marketing to help you grow your brand.
          </p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="px-6 py-2 text-lg font-semibold text-white bg-orange-500 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Get Started
            </a>
            <a
              href="#"
              className="px-6 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex justify-center items-center mt-10 lg:mt-0 lg:w-1/2">
          <form className="w-full max-w-md p-6 rounded-lg shadow-2xl">
            <h2 className="text-xl font-bold text-center text-white mb-4">Contact Us</h2>
            <div className="mb-4 flex items-center border-b-2 border-white">
              <FaEnvelope className="text-white mr-2" />
              <input
                type="email"
                className="w-full px-4 py-2 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Get in Touch
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Hero;
