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

  const API_BASE_URL = 'http://localhost:5000/api/blogs';  // Replace with your backend URL

  // Fetch all blogs from the server
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_BASE_URL);
      setBlogs(response.data);
    } catch (err) {
      console.error(err.response || err.message);  // Log the error for debugging
      setError('Error fetching blogs');
    } finally {
      setLoading(false);
    }
  };

  // Fetch a single blog by ID
  const fetchBlogById = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;  // Return the blog data directly
    } catch (err) {
      console.error(err.response || err.message);
      setError('Error fetching blog');
      return null;  // Return null in case of error
    } finally {
      setLoading(false);
    }
  };

  // Create a new blog (send token in headers)
  const createBlog = async (newBlog) => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError('Authorization token is missing');
      return;
    }

    try {
      const response = await axios.post(
        API_BASE_URL, 
        newBlog,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the header
          },
        }
      );
      setBlogs((prevBlogs) => [...prevBlogs, response.data]);
      fetchBlogs();  // Re-fetch blogs after creating a new one
    } catch (err) {
      console.error(err.response || err.message); // Log the full error for debugging
      setError('Error creating blog');
    }
  };

  // Update a blog (send token in headers)
  const updateBlog = async (id, updatedBlog) => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError('Authorization token is missing');
      return;
    }

    try {
      const response = await axios.put(
        `${API_BASE_URL}/${id}`,
        updatedBlog,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the header
          },
        }
      );
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) => (blog._id === id ? response.data : blog))
      );
      fetchBlogs();  // Re-fetch blogs after updating a blog
    } catch (err) {
      console.error(err.response || err.message);
      setError('Error updating blog');
    }
  };

  // Delete a blog (send token in headers)
  const deleteBlog = async (id) => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError('Authorization token is missing');
      return;
    }

    try {
      await axios.delete(`${API_BASE_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the header
        },
      });
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
      fetchBlogs();  // Re-fetch blogs after deleting a blog
    } catch (err) {
      console.error(err.response || err.message);
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
        fetchBlogById,   // Expose fetchBlogById
        createBlog,
        updateBlog,
        deleteBlog,
        fetchBlogs, 
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
