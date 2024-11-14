import React, { useEffect, useState } from 'react';
import { useBlogs } from '../../context/BlogContext'; // Assuming your context is used for fetching blogs
import { Link } from 'react-router-dom';
import { IoMdSwap } from 'react-icons/io';

const Gaming = () => {
  const { blogs, loading, error } = useBlogs();
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  // Filter blogs by Gaming category
  useEffect(() => {
    const gamingBlogs = blogs.filter((blog) => blog.category === "Gaming");
    setFilteredBlogs(gamingBlogs);
  }, [blogs]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Function to truncate the description
  const truncateDescription = (text, length = 150) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-50 flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow max-w-7xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-purple-800">
          Gaming Blogs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredBlogs.length === 0 ? (
            <div className="text-center text-xl text-gray-700">
              <p>No blogs found in this category.</p>
              {/* You can add an image or icon here for better UX */}
              <img src="/path/to/empty-icon.png" alt="No blogs" className="mx-auto mt-4" />
            </div>
          ) : (
            filteredBlogs.map((blog) => (
              <div
                key={blog._id}
                className="p-6 relative overflow-hidden"
                style={{ perspective: '1000px' }}
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
                  <h2 className="text-2xl font-semibold mb-4 text-purple-900 tracking-wide">
                    {blog.title}
                  </h2>

                  <div className="text-sm text-gray-600 mb-4 italic">
                    <span className="font-semibold text-purple-600">{blog.author}</span> |
                    <span className="ml-1 text-gray-500">{new Date(blog.published_date).toLocaleDateString()}</span>
                  </div>

                  <p className="text-gray-800 mb-6">
                    {truncateDescription(blog.description)}
                  </p>

                  <Link
                    to={`/blog/${blog._id}`}
                    className="text-purple-500 hover:text-purple-700 font-semibold text-lg flex items-center space-x-2 transform transition-all duration-300"
                    aria-label={`Read more about ${blog.title}`} // Added aria-label for better accessibility
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
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Gaming;
