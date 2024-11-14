import { useState } from 'react';
import { useBlogs } from '../context/BlogContext';
import Swal from 'sweetalert2';

const useCreateBlog = () => {
  const { createBlog } = useBlogs();
  const [formData, setFormData] = useState({
    title: { english: '', hinglish: '' },
    description: { english: '', hinglish: '' },
    htmlDescription: '', // Add this to store HTML content
    author: '',
    category: '',
    tags: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('title') || name.startsWith('description')) {
      const [field, language] = name.split('.');
      setFormData((prevState) => ({
        ...prevState,
        [field]: {
          ...prevState[field],
          [language]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = { ...formData, tags: formData.tags.split(',').map((tag) => tag.trim()) };

    try {
      await createBlog(blogData);
      Swal.fire({
        icon: 'success',
        title: 'Blog Created!',
        text: 'Your blog has been successfully created.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      });
      setFormData({
        title: { english: '', hinglish: '' },
        description: { english: '', hinglish: '' },
        htmlDescription: '', // Reset HTML description
        author: '',
        category: '',
        tags: '',
      });
    } catch (error) {
      console.error('Error creating blog:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to create blog. Please try again.',
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK',
      });
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useCreateBlog;
