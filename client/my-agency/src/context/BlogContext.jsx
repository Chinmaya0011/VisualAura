import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const BlogContext = createContext();

// Custom hook to use BlogContext
export const useBlogs = () => {
  return useContext(BlogContext);
};

// Provider component
export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs from the server
  const fetchBlogs = async () => {
    try {
      const response = await axios.get('/api/blogs');  // Update the URL based on your API
      setBlogs(response.data);
    } catch (err) {
      setError('Error fetching blogs');
    } finally {
      setLoading(false);
    }
  };

  // Create a new blog
  const createBlog = async (newBlog) => {
    try {
      const response = await axios.post('/api/blogs', newBlog);  // Update the URL based on your API
      setBlogs((prevBlogs) => [...prevBlogs, response.data]);
    } catch (err) {
      setError('Error creating blog');
    }
  };

  // Update a blog
  const updateBlog = async (id, updatedBlog) => {
    try {
      const response = await axios.put(`/api/blogs/${id}`, updatedBlog);
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) => (blog._id === id ? response.data : blog))
      );
    } catch (err) {
      setError('Error updating blog');
    }
  };

  // Delete a blog
  const deleteBlog = async (id) => {
    try {
      await axios.delete(`/api/blogs/${id}`);
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
    } catch (err) {
      setError('Error deleting blog');
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider
      value={{
        blogs,
        loading,
        error,
        createBlog,
        updateBlog,
        deleteBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
