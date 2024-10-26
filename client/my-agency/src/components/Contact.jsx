import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Left Side - Company Office Map Address */}
      <div className="md:w-1/2 p-4 flex flex-col justify-between">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Office</h2>
        <div className="mb-4">
          <p className="text-lg font-medium">Company Name</p>
          <div className="flex items-center mt-2">
            <FaMapMarkerAlt className="text-blue-500 mr-2" />
            <span>Khallikote, Ganjam, Odisha</span>
          </div>
          <div className="flex items-center mt-2">
            <FaPhone className="text-blue-500 mr-2" />
            <span>
              <a href="tel:+917077835119">7077835119</a>
            </span>
          </div>
          <div className="flex items-center mt-2">
            <FaEnvelope className="text-blue-500 mr-2" />
            <span>
              <a href="mailto:imchinu17@gmail.com">imchinu17@gmail.com</a>
            </span>
          </div>
        </div>
        

        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.149026831222!2d84.83502871517378!3d19.70545064328966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a18a897d5a5b8e3%3A0x2c00c5f99ccf3a8!2sKhallikote%2C%20Ganjam%2C%20Odisha!5e0!3m2!1sen!2sin!4v1616443632150!5m2!1sen!2sin"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  className="rounded-lg shadow-md transition-transform transform hover:scale-100"
/>
<div className="flex space-x-4 m-2">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebook className="w-8 h-8 text-blue-600 hover:text-blue-700 transition-colors" />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="w-8 h-8 text-pink-600 hover:text-pink-700 transition-colors" />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="w-8 h-8 text-blue-700 hover:text-blue-800 transition-colors" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitter className="w-8 h-8 text-blue-400 hover:text-blue-500 transition-colors" />
  </a>
</div>

      </div>

      {/* Right Side - Contact Form */}
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Contact Us</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              required 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform " 
              placeholder="Your Name" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              required 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform " 
              placeholder="Your Email" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              required 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform " 
              rows="4" 
              placeholder="Your Message"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-3 rounded-md shadow-md hover:bg-green-600 transition-transform transform ">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
