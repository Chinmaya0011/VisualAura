// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center items-start">
        {/* About Section */}
        <div className="space-y-3 px-4 md:px-0 text-center lg:text-left">
          <h4 className="text-xl font-semibold mb-3">Chinmaya Freelance Services</h4>
          <p className="text-sm mb-3">Providing digital solutions that are tailored to your needs. I specialize in web development, mobile app design, and more!</p>
          <div className="flex justify-start space-x-5">
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
        <div className="space-y-3 px-4 md:px-0 sm:text-center lg:text-start">
          <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
          <ul className="text-sm space-y-2 ">
            <li><a href="/services" className="hover:text-blue-400">Services</a></li>
            <li><a href="/portfolio" className="hover:text-blue-400">Portfolio</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            <li><a href="/about" className="hover:text-blue-400">About Me</a></li>
            <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
          </ul>
        </div>

        {/* Contact Info and Newsletter Section */}
        <div className="space-y-3 px-4 md:px-0 text-center lg:text-left">
          <h4 className="text-xl font-semibold mb-3">Contact & Subscribe</h4>
          <div className="space-y-3">
            {/* Contact Info */}
            <ul className="text-sm space-y-2">
              <li className="flex items-center justify-center lg:justify-start">
                <FaEnvelope className="mr-2" /> <a href="mailto:chinmaya@example.com" className="hover:text-blue-400">chinmaya@example.com</a>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <FaPhoneAlt className="mr-2" /> <a href="tel:+912345678901" className="hover:text-blue-400">+91 234 567 8901</a>
              </li>
            </ul>

            {/* Newsletter Subscription */}
            <p className="text-sm">Stay updated with the latest news and offers!</p>
            <form>
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
