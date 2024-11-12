import React from 'react';
import { useFreeQuoteContext } from '../context/FormContext';

const FreeQuoteForm = () => {
  const { quoteData, handleChange } = useFreeQuoteContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteData),
      });
      const result = await response.json();
      console.log(result.message);
      // Reset form after submission if needed
    } catch (error) {
      console.log('Error submitting form:', error);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-center">
      <h2 className="text-5xl font-extrabold text-white mb-8 tracking-wider">Get Your Free Quote</h2>
      <p className="text-lg text-white mb-10 max-w-3xl mx-auto opacity-90">
        Fill out the form below, and we’ll send you a free quote for your project!
      </p>

      <div className="max-w-4xl mx-auto bg-white p-8 shadow-xl rounded-3xl">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Name Field */}
            <div className="relative">
              <label htmlFor="name" className="block text-left text-gray-700 font-semibold text-lg">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={quoteData.name}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <label htmlFor="email" className="block text-left text-gray-700 font-semibold text-lg">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={quoteData.email}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Mobile Field */}
            <div className="relative">
              <label htmlFor="mobile" className="block text-left text-gray-700 font-semibold text-lg">Your Mobile</label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={quoteData.mobile}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
                placeholder="Enter your mobile number"
                required
              />
            </div>
          </div>

          {/* Project Details Field */}
          <div className="relative mt-6">
            <label htmlFor="projectDetails" className="block text-left text-gray-700 font-semibold text-lg">Project Details</label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={quoteData.projectDetails}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
              placeholder="Provide project details"
              rows="4"
              required
            />
          </div>

          {/* Service Field */}
          <div className="relative mt-6">
            <label htmlFor="service" className="block text-left text-gray-700 font-semibold text-lg">Service</label>
            <select
              id="service"
              name="service"
              value={quoteData.service}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
              required
            >
              <option value="">Select Service</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="SEO">SEO</option>
            </select>
          </div>

          {/* Meeting Date Field */}
          <div className="relative mt-6">
            <label htmlFor="meetingDate" className="block text-left text-gray-700 font-semibold text-lg">Meeting Date</label>
            <input
              type="date"
              id="meetingDate"
              name="meetingDate"
              value={quoteData.meetingDate}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Meeting Time Field */}
          <div className="relative mt-6">
            <label htmlFor="meetingTime" className="block text-left text-gray-700 font-semibold text-lg">Meeting Time</label>
            <input
              type="time"
              id="meetingTime"
              name="meetingTime"
              value={quoteData.meetingTime}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Professional Type Field */}
          <div className="relative mt-6">
            <label htmlFor="professionalType" className="block text-left text-gray-700 font-semibold text-lg">Professional Type</label>
            <select
              id="professionalType"
              name="professionalType"
              value={quoteData.professionalType}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
              required
            >
              <option value="">Select Professional Type</option>
              <option value="Freelancer">Freelancer</option>
              <option value="Agency">Agency</option>
              <option value="Corporate">Corporate</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="px-10 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-xl hover:bg-blue-700"
            >
              Get Quote
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FreeQuoteForm;
