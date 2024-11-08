import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoMdSwap } from 'react-icons/io'; // Swap icon for language toggle
import blogs from '../assets/blogs.json'; // Ensure the path is correct
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import LanguageToggleButton from '../components/LanguageToggleButton';  // Importing LanguageToggleButton

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  const [language, setLanguage] = useState('english');  // State to toggle language globally

  if (!blog) {
    return <div className="text-center text-red-500">Blog not found!</div>;
  }

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'english' ? 'hinglish' : 'english'));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar /> {/* Include your Navbar here */}
      
      <div className="container mx-auto px-4 py-8 flex-grow max-w-screen-lg">
        {/* Language Toggle Button */}
        <LanguageToggleButton language={language} toggleLanguage={toggleLanguage} /> {/* Language toggle button here */}

        <h1 className="text-2xl font-bold text-center mb-6 text-indigo-700">
          {language === 'english' ? blog.title.english : blog.title.hinglish}
        </h1>

        <div className="text-sm text-gray-500 mb-4">
          <span>{blog.author} | </span>
          <span>{blog.published_date}</span>
        </div>

        <p className="text-lg text-gray-700 mb-6">
          {language === 'english' ? blog.description.english : blog.description.hinglish}
        </p>

        <div className="flex justify-center">
          <Link
            to="/blog"
            className="text-blue-500 hover:text-blue-700 font-semibold text-lg flex items-center space-x-2 transform hover:scale-110 transition-all duration-300"
          >
            <IoMdSwap className="transform rotate-90" />
            <span>Back to Blog List</span>
          </Link>
        </div>
      </div>

      <Footer /> {/* Include your Footer here */}
    </div>
  );
};

export default BlogDetail;
