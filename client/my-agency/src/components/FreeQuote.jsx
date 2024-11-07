// Import React and necessary icons
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
    <section className="py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center">
      <h2 className="text-4xl font-bold text-white mb-6">Get a Free Quote</h2>
      <p className="text-xl text-white mb-8 max-w-3xl mx-auto opacity-80">
        Fill out the form below to receive a personalized quote for your project. We’ll get back to you as soon as possible!
      </p>

      <div className="max-w-4xl mx-auto bg-white p-8 shadow-xl rounded-2xl border-2 border-indigo-600">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="relative">
              <label htmlFor="name" className="block text-left text-gray-700">Full Name</label>
              <div className="flex items-center border-b-2 border-gray-300 py-2">
                <FaUserAlt className="text-gray-500 mr-3" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 bg-transparent focus:outline-none"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="relative">
              <label htmlFor="email" className="block text-left text-gray-700">Email Address</label>
              <div className="flex items-center border-b-2 border-gray-300 py-2">
                <FaEnvelope className="text-gray-500 mr-3" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 bg-transparent focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
          </div>

          {/* Mobile and Service Fields */}
          <div className="mt-6 flex gap-6">
            {/* Mobile Field */}
            <div className="flex-1 relative">
              <label htmlFor="mobile" className="block text-left text-gray-700">Mobile Number</label>
              <div className="flex items-center border-b-2 border-gray-300 py-2">
                <FaPhoneAlt className="text-gray-500 mr-3" />
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-2 bg-transparent focus:outline-none"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
            </div>

            {/* Service Selection */}
            <div className="flex-1 relative">
              <label htmlFor="service" className="block text-left text-gray-700">Choose Service</label>
              <div className="flex items-center border-b-2 border-gray-300 py-2">
                <FaClipboardList className="text-gray-500 mr-3" />
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-2 bg-transparent focus:outline-none"
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
          <div className="mt-6 relative">
            <label htmlFor="projectDetails" className="block text-left text-gray-700">Project Details</label>
            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <textarea
                id="projectDetails"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                className="w-full p-2 bg-transparent focus:outline-none"
                placeholder="Describe your project"
                rows="6"
                required
              ></textarea>
            </div>
          </div>

          {/* Meeting Date & Time */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative">
              <label htmlFor="meetingDate" className="block text-left text-gray-700">Preferred Meeting Date</label>
              <div className="flex items-center border-b-2 border-gray-300 py-2">
                <FaCalendarAlt className="text-gray-500 mr-3" />
                <input
                  type="date"
                  id="meetingDate"
                  name="meetingDate"
                  value={formData.meetingDate}
                  onChange={handleChange}
                  className="w-full p-2 bg-transparent focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="meetingTime" className="block text-left text-gray-700">Preferred Meeting Time</label>
              <div className="flex items-center border-b-2 border-gray-300 py-2">
                <FaClock className="text-gray-500 mr-3" />
                <input
                  type="time"
                  id="meetingTime"
                  name="meetingTime"
                  value={formData.meetingTime}
                  onChange={handleChange}
                  className="w-full p-2 bg-transparent focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Professional Type */}
          <div className="mt-6 relative">
            <label htmlFor="professionalType" className="block text-left text-gray-700">Professional Type</label>
            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <FaBriefcase className="text-gray-500 mr-3" />
              <select
                id="professionalType"
                name="professionalType"
                value={formData.professionalType}
                onChange={handleChange}
                className="w-full p-2 bg-transparent focus:outline-none"
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
          <div className="mt-6">
            <button
              type="submit"
              className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
