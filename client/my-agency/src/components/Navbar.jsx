import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSectionContext } from '../context/SectionContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const { servicesRef, technologiesRef, portfolioRef, aboutUsRef, contactRef } = useSectionContext();

  const toggleMenu = () => setIsOpen((prevState) => !prevState);
  const toggleAdminDropdown = () => setIsAdminOpen((prevState) => !prevState);

  const onSectionClick = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

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
              <button onClick={() => onSectionClick(servicesRef)} className="block py-2 px-3 text-white rounded-md hover:bg-blue-800">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => onSectionClick(technologiesRef)} className="block py-2 px-3 text-white rounded-md hover:bg-blue-800">
                Technologies
              </button>
            </li>
            <li>
              <button onClick={() => onSectionClick(portfolioRef)} className="block py-2 px-3 text-white rounded-md hover:bg-blue-800">
                Portfolio
              </button>
            </li>
            <li>
              <button onClick={() => onSectionClick(aboutUsRef)} className="block py-2 px-3 text-white rounded-md hover:bg-blue-800">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => onSectionClick(contactRef)} className="block py-2 px-3 text-white rounded-md hover:bg-blue-800">
                Contact
              </button>
            </li>
            <li>
              <Link to="/blog" target="_blank" className="block py-2 px-3 text-white rounded-md hover:bg-blue-800">
                Blog
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleAdminDropdown}
                className="block py-2 px-3 text-white rounded-md hover:bg-blue-800 focus:outline-none"
              >
                Admin
              </button>
              {isAdminOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
                  <ul className="py-2">
                    <li>
                      <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/signup" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                        Signup
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
