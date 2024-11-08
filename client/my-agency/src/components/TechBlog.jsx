import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdSwap } from 'react-icons/io';  // Correct import for IoMdSwap
import blogs from '../assets/blogs.json'; // Ensure the path is correct
 // Footer component
import LanguageToggleButton from './LanguageToggleButton';

// Function to sort blogs by published date
const sortBlogsByDate = (blogs) => {
  return blogs.sort((a, b) => new Date(b.published_date) - new Date(a.published_date));
};

const TechBlog = () => {
  const [language, setLanguage] = useState('english'); // State to toggle language globally

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'english' ? 'hinglish' : 'english'));
  };

  // Sort blogs by date before displaying
  const sortedBlogs = sortBlogsByDate(blogs);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      <div className="container mx-auto px-4 py-8 flex-grow max-w-7xl">
        <LanguageToggleButton language={language} toggleLanguage={toggleLanguage} /> {/* Language Toggle Button */}

        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">
          All Blogs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-2xl hover:scale-105 transform duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                {language === 'english' ? blog.title.english : blog.title.hinglish}
              </h2>

              <div className="text-sm text-gray-500 mb-4">
                <span>{blog.author} | </span>
                <span>{blog.published_date}</span>
              </div>

              <p className="text-gray-700 mb-6">
                {language === 'english' ? blog.description.english : blog.description.hinglish}
              </p>
              {/* Link to individual blog page */}
              <Link
                to={`/blog/${blog.id}`}
                className="text-blue-500 hover:text-blue-700 font-semibold text-lg flex items-center space-x-2 transform hover:scale-110 transition-all duration-300"
              >
                <IoMdSwap className="transform rotate-90" />
                <span>Read more</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TechBlog;
