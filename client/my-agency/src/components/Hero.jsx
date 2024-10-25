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
      className={`relative min-h-screen bg-cover bg-center transition-all duration-500 ease-in-out ${
        imageLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-black to-pink-500 opacity-50"></div>

      <section className="relative flex flex-col justify-center px-6 py-12 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between h-full">
        {/* Left Section */}
        <div className="flex flex-col justify-center p-6 text-center lg:text-left lg:max-w-md xl:max-w-lg">
          <h1 className="text-5xl font-extrabold text-white sm:text-4xl leading-tight drop-shadow-lg">
            Complete Online Solutions for Your Business
          </h1>

          <p className="mt-6 mb-8 text-lg text-white sm:mb-12 leading-relaxed tracking-wide">
            We provide web design, development, SEO, digital marketing, and app
            development. <br className="hidden md:inline lg:hidden" />
            Grow your business with our creative agency!
          </p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="px-8 py-3 text-lg font-semibold text-white bg-orange-500 rounded shadow-lg transition-transform transform hover:scale-105 hover:bg-orange-600"
            >
              Get Started
            </a>
            <a
              href="#"
              className="px-8 py-3 text-lg font-semibold text-white border rounded border-white shadow-lg transition-transform transform hover:scale-105 hover:bg-white hover:text-orange-500"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex justify-center items-center mt-10 lg:mt-0 lg:w-1/2">
          <form className="w-full max-w-md p-6 bg-black bg-opacity-50 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-white mb-4">
              Get in Touch
            </h2>
            <div className="mb-4 flex items-center border-b border-white">
              <FaEnvelope className="text-white mr-2" />
              <input
                type="email"
                className="w-full px-4 py-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
                placeholder="Your Email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-orange-500 rounded hover:bg-orange-600 transition-transform transform hover:scale-105"
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
