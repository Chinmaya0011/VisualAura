import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSectionContext } from '../context/SectionContext'; // Import the custom hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Access section refs using the custom hook
  const { heroRef, servicesRef, technologiesRef, portfolioRef, aboutUsRef, contactRef } = useSectionContext();

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Scroll to section
  const onSectionClick = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 uppercase transform transition-all duration-300 hover:scale-110 hover:rotate-6">
            VisualAura
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-white"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-6 rtl:space-x-reverse md:border-0 md:bg-transparent">
           
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
