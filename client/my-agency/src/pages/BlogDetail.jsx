import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IoMdSwap } from 'react-icons/io';
import blogs from '../assets/blogs.json';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LanguageToggleButton from '../components/LanguageToggleButton';
import ShareBlogButton from '../components/ShareBlogButton';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  const [language, setLanguage] = useState('english');

  // Early return for cases where blog isn't found
  if (!blog || !blog.title || !blog.description) {
    return <div className="text-center text-red-500 mt-20 text-2xl">Blog not found!</div>;
  }

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'english' ? 'hinglish' : 'english'));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-10 flex-grow max-w-screen-md">
        
        {/* Language Toggle */}
        <div className="flex justify-end mb-4">
          <LanguageToggleButton language={language} toggleLanguage={toggleLanguage} />
        </div>
        
        {/* Blog Title */}
        <h1 className="text-2xl font-bold text-start mb-6 text-blue-800 transition-transform duration-300 ">
          {language === 'english' ? blog.title.english : blog.title.hinglish}
        </h1>
        
        {/* Author and Date */}
       
        
        {/* Blog Content */}
        <div className="  rounded-lg  leading-relaxed text-lg transition-all duration-300">
          <p className="text-gray-700">
            {language === 'english' ? blog.description.english : blog.description.hinglish}
          </p>
           <div className="flex justify-start items-center text-sm text-gray-600 mb-4 mt-4 italic">
          <span className="font-medium">{blog.author}</span>
          <span className="mx-2">|</span>
          <span>{blog.published_date}</span>
        </div>
          {/* Share Button */}
          <div className="mt-6 flex justify-end">
            <ShareBlogButton />
          </div>
        </div>
        
        {/* Back to Blog List */}
        <div className="flex justify-center mt-10">
          <Link
            to="/blog"
            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center space-x-2 transition-transform duration-300 transform hover:scale-105"
          >
            <IoMdSwap className="transform rotate-90" />
            <span>Back to Blog List</span>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;
