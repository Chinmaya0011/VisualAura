import React, { useState } from 'react';
import axios from 'axios';

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: { english: '', hinglish: '' },
    description: { english: '', hinglish: '' },
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
    const blogData = { ...formData, tags: formData.tags.split(',') };

    try {
      // Make POST request to backend API to create the blog
      const response = await axios.post('/api/blogs', blogData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      alert('Blog created successfully');
      setFormData({
        title: { english: '', hinglish: '' },
        description: { english: '', hinglish: '' },
        author: '',
        category: '',
        tags: '',
      });
    } catch (error) {
      console.error('Error creating blog:', error);
      alert('Failed to create blog');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Create a New Blog</h1>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Title (English)</label>
          <input
            type="text"
            name="title.english"
            value={formData.title.english}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Title (Hinglish)</label>
          <input
            type="text"
            name="title.hinglish"
            value={formData.title.hinglish}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Description (English)</label>
          <textarea
            name="description.english"
            value={formData.description.english}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Description (Hinglish)</label>
          <textarea
            name="description.hinglish"
            value={formData.description.hinglish}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          />
        </div>

        {/* Author */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Tags */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Tags (comma separated)</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. design, business, web"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-600"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
