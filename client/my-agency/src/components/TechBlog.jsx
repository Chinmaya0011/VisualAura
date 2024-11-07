import React from 'react';
import blogs from '../assets/blogs.json';  // Make sure the path is correct

// Function to sort blogs by published date
const sortBlogsByDate = (blogs) => {
  return blogs.sort((a, b) => new Date(b.published_date) - new Date(a.published_date));
};

const TechBlog = () => {
  // Sort blogs by date before displaying
  const sortedBlogs = sortBlogsByDate(blogs);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">All Blogs</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedBlogs.map(blog => (
          <div key={blog.id} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{blog.title}</h2>
            <div className="text-sm text-gray-500 mb-4">
              <span>{blog.author} | </span>
              <span>{blog.published_date}</span>
            </div>
            <p className="text-gray-700 mb-4">{blog.description}</p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechBlog;
