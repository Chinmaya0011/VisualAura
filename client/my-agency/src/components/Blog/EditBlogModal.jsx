import React, { useState, useEffect } from 'react';
import { useBlogs } from '../../context/BlogContext';

const EditBlogModal = ({ blog, closeModal }) => {
  const { updateBlog } = useBlogs();
  const [formData, setFormData] = useState({
    titleEnglish: '',
    titleHinglish: '',
    descriptionEnglish: '',
    descriptionHinglish: '',
    category: '',
    tags: '',
  });

  // Initialize form with the blog data when it changes
  useEffect(() => {
    if (blog) {
      setFormData({
        titleEnglish: blog.title.english || '',
        titleHinglish: blog.title.hinglish || '',
        descriptionEnglish: blog.description.english || '',
        descriptionHinglish: blog.description.hinglish || '',
        category: blog.category || '',
        tags: blog.tags ? blog.tags.join(', ') : '', // Join tags array to string
      });
    }
  }, [blog]);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedBlog = {
      title: {
        english: formData.titleEnglish,
        hinglish: formData.titleHinglish,
      },
      description: {
        english: formData.descriptionEnglish,
        hinglish: formData.descriptionHinglish,
      },
      category: formData.category,
      tags: formData.tags.split(',').map((tag) => tag.trim()), // Convert tags back to array
    };

    try {
      await updateBlog(blog._id, updatedBlog); // Call updateBlog to update the blog on the backend
      closeModal(); // Close the modal after successful update
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-lg shadow-lg h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Edit Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="titleEnglish" className="block text-sm font-medium text-gray-700">Title (English)</label>
            <input
              type="text"
              id="titleEnglish"
              name="titleEnglish"
              value={formData.titleEnglish}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="titleHinglish" className="block text-sm font-medium text-gray-700">Title (Hinglish)</label>
            <input
              type="text"
              id="titleHinglish"
              name="titleHinglish"
              value={formData.titleHinglish}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="descriptionEnglish" className="block text-sm font-medium text-gray-700">Description (English)</label>
            <textarea
              id="descriptionEnglish"
              name="descriptionEnglish"
              value={formData.descriptionEnglish}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="descriptionHinglish" className="block text-sm font-medium text-gray-700">Description (Hinglish)</label>
            <textarea
              id="descriptionHinglish"
              name="descriptionHinglish"
              value={formData.descriptionHinglish}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags (comma separated)</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex justify-between items-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save Changes</button>
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlogModal;
