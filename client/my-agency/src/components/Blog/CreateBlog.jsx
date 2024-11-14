import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import useCreateBlog from '../../hooks/useCreateBlog'; // Import the custom hook
const categories = [
  { name: 'AI/ML', value: 'aiml' },
  { name: 'Mobiles', value: 'mobiles' },
  { name: 'Laptops', value: 'laptops' },
  { name: 'Gadgets', value: 'gadgets' },
  { name: 'Social', value: 'social' },
  { name: 'Gaming', value: 'gaming' }
];
const CreateBlog = () => {
  const { formData, handleChange, handleSubmit } = useCreateBlog();

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

        {/* HTML Description (Rendered HTML Content) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">HTML Description</label>
          <textarea
            name="htmlDescription"
            value={formData.htmlDescription}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            placeholder="<h1>HTML</h1><p>Content here</p>"
          />
        </div>

        {/* Render HTML Description */}
        <div
          className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50"
          dangerouslySetInnerHTML={{ __html: formData.htmlDescription }}
        />

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
        {categories.map((category, index) => (
          <option key={index} value={category.value}>
            {category.name}
          </option>
        ))}
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
