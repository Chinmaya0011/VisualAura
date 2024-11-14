import React, { useEffect, useState } from 'react';
import { useBlogs } from '../../context/BlogContext'; // Assuming you're using this context to fetch blogs
import { Link } from 'react-router-dom';
import { IoMdSwap } from 'react-icons/io';

const Mobiles = () => {
  const { blogs, loading, error } = useBlogs();
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  // Filter blogs by Mobiles category
  useEffect(() => {
    const mobileBlogs = blogs.filter((blog) => blog.category === 'Mobiles');
    setFilteredBlogs(mobileBlogs);
  }, [blogs]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Function to truncate the description
  const truncateDescription = (text, length = 150) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-orange-50 flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow max-w-7xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-yellow-800">
          Mobiles Blogs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredBlogs.length === 0 ? (
            <p>No blogs found in this category.</p>
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
                    height: '100%',
                    transform: 'rotateX(10deg) rotateY(-10deg)',
                    background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
                    borderRadius: '10px',
                    padding: '20px',
                    boxShadow: 'inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff',
                  }}
                >
                  <h2 className="text-2xl font-semibold mb-4 text-yellow-900 tracking-wide">
                    {blog.title?.english || blog.title?.hinglish || 'Untitled'}
                  </h2>

                  <div className="text-sm text-gray-600 mb-4 italic">
                    <span className="font-semibold text-yellow-600">{blog.author}</span> | 
                    <span className="ml-1 text-gray-500">
                      {new Date(blog.published_date).toLocaleDateString()}
                    </span>
                  </div>

                  <p className="text-gray-800 mb-6">
                    {truncateDescription(blog.description?.english || blog.description?.hinglish || 'No description available')}
                  </p>

                  <Link
                    to={`/blog/${blog._id}`}
                    className="text-yellow-500 hover:text-yellow-700 font-semibold text-lg flex items-center space-x-2 transform transition-all duration-300"
                  >
                    <IoMdSwap className="transform rotate-90" />
                    <span>Read more</span>
                  </Link>
                </div>

                <div
                  className="absolute bottom-0 left-0 w-full h-full opacity-20 transform translate-y-full rotate-x-180"
                  style={{
                    background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
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

export default Mobiles;
