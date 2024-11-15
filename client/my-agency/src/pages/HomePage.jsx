import React from 'react';
import { Helmet } from 'react-helmet';  // Import React Helmet
import TechBlog from '../components/Blog/TechBlog';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import TrendingBlog from '../components/Blog/TrendingBlog';
import Categories from '../components/Categories';
const HomePage = () => {
  return (
    <div>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Tech Blog - The Best in Technology</title>
        <meta
          name="description"
          content="Stay updated with the latest trends in technology, gadgets, programming, and more. Explore insightful articles and tutorials."
        />
        <meta
          name="keywords"
          content="technology, blog, gadgets, programming, tutorials, tech news"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Tech Blog - The Best in Technology"
        />
        <meta
          property="og:description"
          content="Stay updated with the latest trends in technology, gadgets, programming, and more. Explore insightful articles and tutorials."
        />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <meta property="og:url" content="https://example.com/homepage" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tech Blog - The Best in Technology" />
        <meta
          name="twitter:description"
          content="Stay updated with the latest trends in technology, gadgets, programming, and more. Explore insightful articles and tutorials."
        />
        <meta name="twitter:image" content="https://example.com/image.jpg" />
      </Helmet>

      {/* Page content */}
      <Navbar />
      <HeroSection/>
      <TrendingBlog/>
      <Categories/>
      <TechBlog />
      <Footer />
    </div>
  );
};

export default HomePage;
