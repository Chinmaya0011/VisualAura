import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdSwap } from 'react-icons/io';
import blogs from '../assets/blogs.json';
import LanguageToggleButton from './LanguageToggleButton';

const sortBlogsByDate = (blogs) => {
  return blogs.sort((a, b) => new Date(b.published_date) - new Date(a.published_date));
};

// Helper function to limit description to 10 words
const truncateDescription = (description) => {
  const words = description.split(' ');
  return words.length > 20 ? words.slice(0, 20).join(' ') + '...' : description;
};

const TechBlog = () => {
  const [language, setLanguage] = useState('english');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'english' ? 'hinglish' : 'english'));
  };

  const sortedBlogs = sortBlogsByDate(blogs);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-blue-50 flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow max-w-7xl">
        <LanguageToggleButton language={language} toggleLanguage={toggleLanguage} />

        <h1 className="text-4xl font-bold text-center mb-12 text-indigo-800">
          All Blogs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {sortedBlogs.map((blog) => (
            <div
              key={blog.id}
              className="p-6 relative overflow-hidden"
              style={{
                perspective: '1000px',
              }}
            >
              <div
                className="relative"
                style={{
                  height: "100%",
                  transform: 'rotateX(10deg) rotateY(-10deg)',
                  background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
                  borderRadius: '10px',
                  padding: '20px',
                  boxShadow: 'inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff',
                }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-indigo-900 tracking-wide">
                  {language === 'english' ? blog.title.english : blog.title.hinglish}
                </h2>

                <div className="text-sm text-gray-600 mb-4 italic">
                  <span className="font-semibold text-purple-600">{blog.author}</span> | 
                  <span className="ml-1 text-gray-500">{blog.published_date}</span>
                </div>

                <p className="text-gray-800 mb-6">
                  {truncateDescription(language === 'english' ? blog.description.english : blog.description.hinglish)}
                </p>

                <Link
                  to={`/blog/${blog.id}`}
                  className="text-indigo-500 hover:text-indigo-700 font-semibold text-lg flex items-center space-x-2
                             transform transition-all duration-300"
                >
                  <IoMdSwap className="transform rotate-90" />
                  <span>Read more</span>
                </Link>
              </div>
              
              {/* Mirror Reflection Effect */}
              <div
                className="absolute bottom-0 left-0 w-full h-full opacity-20 transform translate-y-full rotate-x-180"
                style={{
                  background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
                  borderRadius: '10px',
                  filter: 'blur(10px)',
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechBlog;
