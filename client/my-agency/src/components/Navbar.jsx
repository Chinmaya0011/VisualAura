import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaUserPlus } from 'react-icons/fa'; // Import FontAwesome icons
import useAuth from '../hooks/useAuth'; // Import the custom hook
import { Helmet } from 'react-helmet'; // Import react-helmet

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useAuth(); // Use the custom hook to check if the user is logged in

  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <Helmet>
        <title>VisualAura - Explore AI/ML, Mobiles, Laptops, Gadgets & More</title>
        <meta name="description" content="VisualAura - A platform for AI/ML, Mobiles, Laptops, Gadgets, and more. Stay updated with the latest trends in technology, gaming, and social media." />
        <meta name="keywords" content="AI, ML, Mobiles, Laptops, Gadgets, Social, Gaming, Technology, Trends" />
        <meta property="og:title" content="VisualAura - Explore AI/ML, Mobiles, Laptops, Gadgets & More" />
        <meta property="og:description" content="Stay updated with the latest trends in technology, gaming, and social media on VisualAura." />
        <meta property="og:image" content="URL-to-an-image" /> {/* Add an image for social sharing */}
        <meta property="og:url" content="https://your-site-url.com" /> {/* Change to your actual URL */}
      </Helmet>

      <nav className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-lg" aria-label="Main Navigation">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
          <Link to="/" className="flex items-center space-x-3" title="Go to homepage">
            <span className="self-center text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 uppercase transform transition-all duration-300 hover:scale-110 hover:rotate-6">
              VisualAura
            </span>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-blue-800 focus:outline-none"
            aria-label="Open main menu"
          >
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-6 md:border-0 md:bg-transparent">
              <li>
                <Link to="/aiml" className="block py-2 px-3 text-white rounded-md hover:bg-blue-800 transform transition-all duration-300 hover:scale-110 hover:rotate-3" title="AI and Machine Learning">
                  AI/ML
                </Link>
              </li>
              <li>
                <Link to="/mobiles" className="block py-2 px-3 text-white rounded-md hover:bg-blue-800 transform transition-all duration-300 hover:scale-110 hover:rotate-3" title="Latest Mobile Phones">
                  Mobiles
                </Link>
              </li>
              <li>
                <Link to="/laptops" className="block py-2 px-3 text-white rounded-md hover:bg-blue-800 transform transition-all duration-300 hover:scale-110 hover:rotate-3" title="Top Laptops for Work and Play">
                  Laptops
                </Link>
              </li>
              <li>
                <Link to="/gadgets" className="block py-2 px-3 text-white rounded-md hover:bg-blue-800 transform transition-all duration-300 hover:scale-110 hover:rotate-3" title="Latest Gadgets and Devices">
                  Gadgets
                </Link>
              </li>
              <li>
                <Link to="/social" className="block py-2 px-3 text-white rounded-md hover:bg-blue-800 transform transition-all duration-300 hover:scale-110 hover:rotate-3" title="Social Media Trends">
                  Social
                </Link>
              </li>
              <li>
                <Link to="/gaming" className="block py-2 px-3 text-white rounded-md hover:bg-blue-800 transform transition-all duration-300 hover:scale-110 hover:rotate-3" title="Gaming News and Reviews">
                  Gaming
                </Link>
              </li>
              {/* Conditionally render mobile menu items */}
              {!isLoggedIn ? (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="block py-2 px-3 text-white rounded-md hover:bg-blue-800 transform transition-all duration-300 hover:scale-110 hover:rotate-3"
                      title="Login to your account"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="block py-2 px-3 text-white rounded-md hover:bg-blue-800 transform transition-all duration-300 hover:scale-110 hover:rotate-3"
                      title="Join as a creator"
                    >
                      Join as Creator
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    to="/dashboard"
                    className="block py-2 px-3 text-white rounded-md hover:bg-blue-800 transform transition-all duration-300 hover:scale-110 hover:rotate-3"
                    title="Go to your dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
        
        </div>
      </nav>
    </>
  );
};

export default Navbar;
