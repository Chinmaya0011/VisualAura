import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import {useSectionContext} from '../context/SectionContext'
const Footer = () => {
  // Access the section references from context
  const {
    heroRef,
    servicesRef,
    technologiesRef,
    portfolioRef,
    testimonialsRef,
    pricingRef,
    ourTeamRef,
    metricsRef,
    aboutUsRef,
    ctaRef,
    contactRef,
  } = useSectionContext();

  // Scroll to a specific section when a link is clicked
  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-10 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center items-start">
        {/* About Section */}
        <div className="space-y-4 text-center lg:text-left">
          <h4 className="text-xl font-semibold mb-3 text-yellow-400">VisualAura</h4>
          <p className="text-sm mb-3">
            Providing digital solutions that are tailored to your needs. Specializing in web development, mobile app design, and more!
          </p>
          <div className="flex justify-center lg:justify-start space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4 text-center lg:text-left">
          <h4 className="text-xl font-semibold mb-3 text-yellow-400">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><button onClick={() => scrollToSection(servicesRef)} className="hover:text-blue-400">Services</button></li>
            <li><button onClick={() => scrollToSection(portfolioRef)} className="hover:text-blue-400">Portfolio</button></li>
            <li><button onClick={() => scrollToSection(contactRef)} className="hover:text-blue-400">Contact</button></li>
            <li><button onClick={() => scrollToSection(aboutUsRef)} className="hover:text-blue-400">About Me</button></li>
            <li><button onClick={() => scrollToSection(ctaRef)} className="hover:text-blue-400">Blog</button></li>
          </ul>
        </div>

        {/* Contact Info and Newsletter Section */}
        <div className="space-y-4 text-center lg:text-left">
          <h4 className="text-xl font-semibold mb-3 text-yellow-400">Contact & Subscribe</h4>
          <div className="space-y-3">
            {/* Contact Info */}
            <ul className="text-sm space-y-2">
              <li className="flex items-center justify-center lg:justify-start">
                <FaEnvelope className="mr-2" /> <a href="mailto:70778chinu@gmail.com" className="hover:text-blue-400">70778chinu@gmail.com</a>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <FaPhoneAlt className="mr-2" /> <a href="tel:+917205700390" className="hover:text-blue-400">7205700390</a>
              </li>
            </ul>

            {/* Newsletter Subscription */}
            <p className="text-sm mb-4">Stay updated with the latest news and offers!</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-lg bg-gray-700 text-white mb-3"
              />
              <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="text-center text-sm px-4 sm:px-6 lg:px-8 mt-8">
        <p>&copy; 2024 Chinmaya. All rights reserved.</p>
        <div className="mt-3">
          <a href="/terms" className="text-blue-400 hover:underline mr-2">Terms of Service</a> | 
          <a href="/privacy" className="text-blue-400 hover:underline ml-2">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
