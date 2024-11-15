import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { IoMdSwap } from 'react-icons/io';
import { useBlogs } from '../../context/BlogContext';
import useLanguageToggle from '../../hooks/useLanguageToggle';
import { Helmet } from 'react-helmet';

// Lazy loading LanguageToggleButton
const LanguageToggleButton = lazy(() => import('../LanguageToggleButton'));

// Truncate function for description preview
const truncateDescription = (description) => {
  const words = description.split(' ');
  return words.length > 20 ? words.slice(0, 20).join(' ') + '...' : description;
};

const TechBlog = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-blue-50 flex flex-col">
      <Helmet>
        <title>Tech Blogs - Read the Latest Posts on Technology</title>
        <meta name="description" content="Explore the latest blogs on technology, software development, and more. Stay updated with tech trends and insights." />
        <meta name="keywords" content="tech blogs, technology, software development, programming, web development" />
        <meta name="author" content="Your Name or Company" />
        <meta property="og:title" content="Tech Blogs - Read the Latest Posts on Technology" />
        <meta property="og:description" content="Explore the latest blogs on technology, software development, and more. Stay updated with tech trends and insights." />
        <meta property="og:image" content="path/to/your/image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/blog" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 flex-grow max-w-7xl">
        <Suspense fallback={<div>Loading language toggle...</div>}>
          <LanguageToggleButton language={language} toggleLanguage={toggleLanguage} />
        </Suspense>

        <h1 className="text-4xl font-bold text-center mb-12 text-indigo-800">
          All Blogs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="p-6 relative overflow-hidden"
              style={{ perspective: '1000px' }}
            >
              <div
                className="relative"
                style={{
                  height: '100%',
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
                  <span className="ml-1 text-gray-500">{new Date(blog.published_date).toLocaleDateString()}</span>
                </div>

                <p className="text-gray-800 mb-6">
                  {truncateDescription(language === 'english' ? blog.description.english : blog.description.hinglish)}
                </p>

                <Link
                  to={`/blog/${blog._id}`}
                  className="text-indigo-500 hover:text-indigo-700 font-semibold text-lg flex items-center space-x-2 transform transition-all duration-300"
                  aria-label={`Read more about ${language === 'english' ? blog.title.english : blog.title.hinglish}`}
                >
                  <IoMdSwap className="transform rotate-90" />
                  <span>Read more</span>
                </Link>
              </div>

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
