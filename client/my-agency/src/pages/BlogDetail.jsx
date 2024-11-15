import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { IoMdSwap } from 'react-icons/io';
import { Helmet } from 'react-helmet'; // Import React Helmet for SEO
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LanguageToggleButton from '../components/LanguageToggleButton';
import ShareBlogButton from '../components/ShareBlogButton';
import useBlogDetail from '../hooks/useBlogDetail';
import useLanguageToggle from '../hooks/useLanguageToggle';

const BlogDetail = () => {
  const { id } = useParams();
  const { blog, loading, error } = useBlogDetail(id);
  const { language, toggleLanguage } = useLanguageToggle();

  if (loading) return <div className="text-center mt-20 text-xl sm:text-2xl">Loading...</div>;

  if (error || !blog || !blog?.title) {
    return (
      <div className="text-center text-red-500 mt-20 text-xl sm:text-2xl">
        {error ? 'Error fetching blog!' : 'Blog not found!'}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{language === 'english' ? blog.title.english : blog.title.hinglish}</title>
        <meta
          name="description"
          content={language === 'english' ? blog.description.english : blog.description.hinglish}
        />
        <meta
          name="keywords"
          content="blog, technology, tech trends, programming, gadgets, tutorials"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content={language === 'english' ? blog.title.english : blog.title.hinglish}
        />
        <meta
          property="og:description"
          content={language === 'english' ? blog.description.english : blog.description.hinglish}
        />
        <meta property="og:image" content={blog.image || 'https://example.com/default-image.jpg'} />
        <meta property="og:url" content={`https://example.com/blog/${id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={language === 'english' ? blog.title.english : blog.title.hinglish} />
        <meta
          name="twitter:description"
          content={language === 'english' ? blog.description.english : blog.description.hinglish}
        />
        <meta name="twitter:image" content={blog.image || 'https://example.com/default-image.jpg'} />
      </Helmet>

      <Navbar />

      <div className="container mx-auto px-4 py-10 flex-grow max-w-screen-md">
        <div className="flex justify-end mb-4">
          <LanguageToggleButton language={language} toggleLanguage={toggleLanguage} />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-6">
          {language === 'english' ? blog.title.english : blog.title.hinglish}
        </h1>

        <div className="flex justify-start items-center text-xs sm:text-sm md:text-base text-gray-600 mb-4 mt-4 italic">
          <span className="font-medium">{blog.author}</span>
          <span className="mx-2">|</span>
          <span>{new Date(blog.published_date).toLocaleDateString()}</span>
        </div>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6">
          {language === 'english' ? blog.description.english : blog.description.hinglish}
        </p>
        
        <div className="rounded-lg shadow-lg bg-white p-6 text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed mb-8">
          {/* Render HTML description directly */}
          {blog.htmlDescription ? (
            <div
              className="blog-description"
              dangerouslySetInnerHTML={{
                __html: blog.htmlDescription, // Just render HTML content
              }}
            />
          ) : (
            <p className="text-gray-500">No additional content available.</p>
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <ShareBlogButton />
        </div>

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
