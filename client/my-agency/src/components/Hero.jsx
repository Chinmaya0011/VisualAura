import React from 'react';
import image from "../assets/heroimg.jpg";
import { FaEnvelope } from 'react-icons/fa'; // Importing only required icon

const Hero = () => {
  return (
    <div
      className="dark:bg-gray-100 dark:text-gray-800"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-r from-green-500 via-black to-pink-500 opacity-50"
      ></div>
      <section className="relative flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between h-full">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1
            className="text-5xl font-bold leading-none sm:text-4xl text-white"
            style={{
              textShadow: '2px 2px 8px rgba(0, 255, 0, 0.7)',
              fontFamily: '"Arial Black", Gadget, sans-serif',
              transform: 'perspective(500px) translateZ(0)',
              filter: 'drop-shadow(0 4px 12px rgba(0, 0, 255, 0.6))',
              transition: 'transform 0.3s ease', // Adding a transition effect
            }}
          >
            Complete Online Solutions for Your Business
          </h1>

          <p
            className="mt-6 mb-8 text-lg sm:mb-12 text-white"
            style={{
              fontFamily: '"Roboto", sans-serif',
              lineHeight: '1.6',
              textAlign: 'start',
              letterSpacing: '0.5px',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)',
            }}
          >
            We provide web design, development, SEO, digital marketing, and app development.
            <br className="hidden md:inline lg:hidden" />
            We are your one-stop solution for online presence. Grow your business with our creative agency!
          </p>

          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded bg-orange-500 text-gray-50 transition-transform duration-300 hover:bg-orange-600 hover:shadow-lg hover:scale-105"
            >
              Get Started
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded border-white text-white transition-transform duration-300 hover:bg-white hover:text-orange-500 hover:shadow-lg hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center mt-10 lg:mt-0 lg:w-1/2">
          <form className="p-6 rounded shadow-lg w-full max-w-md bg-opacity-25 bg-black">
            <h2 className="text-2xl font-bold text-white text-center mb-4">Get in Touch</h2>
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
              className="w-full px-4 py-2 font-semibold text-white bg-orange-500 rounded hover:bg-orange-600 transition duration-300"
            >
              Get in Touch
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Hero;
