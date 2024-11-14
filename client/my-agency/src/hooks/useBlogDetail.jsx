// src/hooks/useBlogDetail.js

import { useState, useEffect } from 'react';
import { useBlogs } from '../context/BlogContext';

const useBlogDetail = (id) => {
  const { fetchBlogById, loading, error } = useBlogs();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const getBlog = async () => {
      const blogData = await fetchBlogById(id);
      setBlog(blogData);
    };
    getBlog();
  }, [id]);

  return { blog, loading, error };
};

export default useBlogDetail;
