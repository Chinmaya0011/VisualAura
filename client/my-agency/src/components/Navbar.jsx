// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaUserPlus } from 'react-icons/fa'; // Import FontAwesome icons
import useAuth from '../hooks/useAuth'; // Import the custom hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useAuth(); // Use the custom hook to check if the user is logged in

  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <Link to="/" className="flex items-center space-x-3">
          <span className="self-center text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 uppercase transform transition-all duration-300 hover:scale-110 hover:rotate-6">
            VisualAura
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-blue-800 focus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-6 md:border-0 md:bg-transparent">
            <li>
              <Link to="/aiml" className="block py-2 px-3 text-white rounded-md hover:bg-blue-800 transform transition-all duration-300 hover:scale-110 hover:rotate-3">
                AI/ML
              </Link>
            </li>
            <li>
              <Link to="/mobiles" className="block py-2 px-3 text-white rounded-md hover:bg-blue-800 transform transition-all duration-300 hover:scale-110 hover:rotate-3">
                Mobiles
              </Link>
            </li>
            <li>
              <Link to="/laptops" className="block py-2 px-3 text-white rounded-md hover:bg-blue-800 transform transition-all duration-300 hover:scale-110 hover:rotate-3">
                Laptops
              </Link>
            </li>
            <li>
              <Link to="/gadgets" className="block py-2 px-3 text-white rounded-md hover:bg-blue-800 transform transition-all duration-300 hover:scale-110 hover:rotate-3">
                Gadgets
              </Link>
            </li>
            <li>
              <Link to="/social" className="block py-2 px-3 text-white rounded-md hover:bg-blue-800 transform transition-all duration-300 hover:scale-110 hover:rotate-3">
                Social
              </Link>
            </li>
            <li>
              <Link to="/gaming" className="block py-2 px-3 text-white rounded-md hover:bg-blue-800 transform transition-all duration-300 hover:scale-110 hover:rotate-3">
                Gaming
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="flex items-center px-4 py-2 rounded-md bg-white text-blue-700 font-semibold hover:bg-blue-100 transition duration-300 transform hover:scale-105 hover:rotate-3"
              >
                <FaUserAlt className="mr-2" />
                Login
              </Link>
              <Link
                to="/signup"
                className="flex items-center px-4 py-2 rounded-md bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition duration-300 transform hover:scale-105 hover:rotate-3"
              >
                <FaUserPlus className="mr-2" />
                Join as Creator
              </Link>
            </>
          ) : (
            <Link
              to="/dashboard"
              className="flex items-center px-4 py-2 rounded-md bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-300 transform hover:scale-105 hover:rotate-3"
            >
              Dashboard
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
