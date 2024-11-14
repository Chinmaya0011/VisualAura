import React, { useState } from 'react';
import { useBlogs } from '../../context/BlogContext';
import Swal from 'sweetalert2';
import { FaCheckCircle } from 'react-icons/fa';

const CreateBlog = () => {
  const { createBlog } = useBlogs();
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

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create a New Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title (English) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Title (English)</label>
          <input
            type="text"
            name="title.english"
            value={formData.title.english}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Title (Hinglish) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Title (Hinglish)</label>
          <input
            type="text"
            name="title.hinglish"
            value={formData.title.hinglish}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Description (English) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Description (English)</label>
          <textarea
            name="description.english"
            value={formData.description.english}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            required
          />
        </div>

        {/* Description (Hinglish) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Description (Hinglish)</label>
          <textarea
            name="description.hinglish"
            value={formData.description.hinglish}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            required
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select a category</option>
            <option value="AI/ML">AI & Machine Learning</option>
            <option value="Mobile Phones">Mobile Phones</option>
            <option value="Laptops">Laptops</option>
            <option value="Smart Gadgets">Smart Gadgets</option>
            <option value="Social Media">Social Media</option>
            <option value="Internet">Internet</option>
            <option value="Gaming">Gaming</option>
            <option value="Software Tools">Software Tools</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Digital Payment">Digital Payment</option>
            <option value="Electric Vehicles">Electric Vehicles</option>
          </select>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Tags (comma separated)</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g. design, business, web"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center transition duration-150 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <FaCheckCircle className="mr-2 text-xl" /> Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
