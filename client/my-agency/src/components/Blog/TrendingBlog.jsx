import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdSwap } from 'react-icons/io';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Helmet } from 'react-helmet';
import { useBlogs } from '../../context/BlogContext';
import useLanguageToggle from '../../hooks/useLanguageToggle';

// Truncate function for description preview
const truncateDescription = (description) => {
  const words = description.split(' ');
  return words.length > 20 ? words.slice(0, 20).join(' ') + '...' : description;
};

const TrendingBlog = () => {
  const { blogs, loading, error } = useBlogs();
  const { language, toggleLanguage } = useLanguageToggle();

  if (loading) {
    return (
      <div className="text-center mt-20 text-2xl">
        <div className="spinner-border" role="status"></div> Loading blogs...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-20">
        <p>An error occurred while fetching blogs. Please try again later.</p>
      </div>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center mt-20 text-xl">
        <p>No blogs available at the moment.</p>
      </div>
    );
  }

  return (
    <div className=" bg-gradient-to-b from-indigo-100 to-blue-50 flex flex-col overflow-y-auto py-8">
      <Helmet>
        <title>Trending Tech Blogs</title>
        <meta name="description" content="Explore trending tech blogs in the industry." />
        <meta name="keywords" content="trending tech blogs, software development, programming" />
      </Helmet>

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-start mb-8 text-indigo-800">Trending Blogs</h1>

        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          transitionTime={600}
          emulateTouch
          dynamicHeight
          className="lg:w-3/4 lg:mx-auto"
        >
          {blogs.slice(0, 5).map((blog) => (
            <div key={blog._id} className="px-4">
              <div
className="p-6 relative lg:flex lg:flex-col lg:justify-between  h-400px lg:h-[250px]"

style={{
                  background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
                  borderRadius: '15px',
                  boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.5)',
                }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-indigo-900 tracking-wide">
                  {language === 'english' ? blog.title.english : blog.title.hinglish}
                </h2>
                <div className="text-sm text-gray-600 mb-4 italic">
                  <span className="font-semibold text-purple-600">{blog.author}</span> |
                  <span className="ml-1 text-gray-500">{new Date(blog.published_date).toLocaleDateString()}</span>
                </div>
                <p className="text-gray-800 mb-6 text-base lg:text-lg leading-relaxed">
                  {truncateDescription(language === 'english' ? blog.description.english : blog.description.hinglish)}
                </p>
                <Link
                  to={`/blog/${blog._id}`}
                  className="text-indigo-500 justify-end hover:text-indigo-700 font-semibold text-lg flex items-center space-x-2 transform transition-all duration-300"
                  aria-label={`Read more about ${language === 'english' ? blog.title.english : blog.title.hinglish}`}
                >
                  <IoMdSwap className="transform rotate-90" />
                  <span>Read more</span>
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TrendingBlog;
