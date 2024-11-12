import React, { useState } from 'react';
import { FaUserAlt, FaEnvelope, FaPhoneAlt, FaClipboardList, FaCalendarAlt, FaClock, FaBriefcase } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FreeQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    projectDetails: '',
    service: '',
    meetingDate: '',
    meetingTime: '',
    professionalType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      mobile: '',
      projectDetails: '',
      service: '',
      meetingDate: '',
      meetingTime: '',
      professionalType: '',
    });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-center animate-bg-motion">
      <h2 className="text-5xl font-extrabold text-white mb-8 tracking-wider transition-transform transform hover:scale-105">Get a Free Quote</h2>
      <p className="text-lg text-white mb-10 max-w-3xl mx-auto opacity-90">
        Fill out the form below to receive a personalized quote for your project. We’ll get back to you as soon as possible!
      </p>

      <div className="max-w-4xl mx-auto bg-white p-8 shadow-2xl rounded-3xl border-4 border-indigo-500 transform transition-all  hover:shadow-xl">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Name Field */}
            <div className="relative">
              <label htmlFor="name" className="block text-left text-gray-700 font-semibold text-lg">Full Name</label>
              <div className="flex items-center border-b-2 border-gray-300 py-3">
                <FaUserAlt className="text-gray-500 mr-3" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg shadow-md"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="relative">
              <label htmlFor="email" className="block text-left text-gray-700 font-semibold text-lg">Email Address</label>
              <div className="flex items-center border-b-2 border-gray-300 py-3">
                <FaEnvelope className="text-gray-500 mr-3" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg shadow-md"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
          </div>

          {/* Mobile and Service Fields */}
          <div className="mt-8 flex gap-8">
            {/* Mobile Field */}
            <div className="flex-1 relative">
              <label htmlFor="mobile" className="block text-left text-gray-700 font-semibold text-lg">Mobile Number</label>
              <div className="flex items-center border-b-2 border-gray-300 py-3">
                <FaPhoneAlt className="text-gray-500 mr-3" />
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg shadow-md"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
            </div>

            {/* Service Selection */}
            <div className="flex-1 relative">
              <label htmlFor="service" className="block text-left text-gray-700 font-semibold text-lg">Choose Service</label>
              <div className="flex items-center border-b-2 border-gray-300 py-3">
                <FaClipboardList className="text-gray-500 mr-3" />
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg shadow-md"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="graphic-design">Graphic Design</option>
                </select>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="mt-8 relative">
            <label htmlFor="projectDetails" className="block text-left text-gray-700 font-semibold text-lg">Project Details</label>
            <div className="flex items-center border-b-2 border-gray-300 py-3">
              <textarea
                id="projectDetails"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                className="w-full p-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg shadow-md"
                placeholder="Describe your project"
                rows="6"
                required
              ></textarea>
            </div>
          </div>

          {/* Meeting Date & Time */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="relative">
              <label htmlFor="meetingDate" className="block text-left text-gray-700 font-semibold text-lg">Preferred Meeting Date</label>
              <div className="flex items-center border-b-2 border-gray-300 py-3">
                <FaCalendarAlt className="text-gray-500 mr-3" />
                <input
                  type="date"
                  id="meetingDate"
                  name="meetingDate"
                  value={formData.meetingDate}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg shadow-md"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="meetingTime" className="block text-left text-gray-700 font-semibold text-lg">Preferred Meeting Time</label>
              <div className="flex items-center border-b-2 border-gray-300 py-3">
                <FaClock className="text-gray-500 mr-3" />
                <input
                  type="time"
                  id="meetingTime"
                  name="meetingTime"
                  value={formData.meetingTime}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg shadow-md"
                  required
                />
              </div>
            </div>
          </div>

          {/* Professional Type */}
          <div className="mt-8 relative">
            <label htmlFor="professionalType" className="block text-left text-gray-700 font-semibold text-lg">Professional Type</label>
            <div className="flex items-center border-b-2 border-gray-300 py-3">
              <FaBriefcase className="text-gray-500 mr-3" />
              <select
                id="professionalType"
                name="professionalType"
                value={formData.professionalType}
                onChange={handleChange}
                className="w-full p-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg shadow-md"
                required
              >
                <option value="">Select your professional type</option>
                <option value="freelancer">Freelancer</option>
                <option value="company">Company</option>
                <option value="startup">Startup</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="px-10 py-4 bg-indigo-600 text-white font-bold text-lg rounded-lg shadow-xl hover:bg-indigo-700 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500"
            >
              Get My Quote
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FreeQuote;
