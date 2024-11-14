import React, { useState } from 'react';
import { useBlogs } from '../../context/BlogContext';
import { Link } from 'react-router-dom';
import EditBlogModal from './EditBlogModal';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2'; // Import SweetAlert2

const ManageBlog = () => {
  const { blogs, loading, error, deleteBlog } = useBlogs();
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Confirm to delete',
      text: 'Are you sure you want to delete this blog?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteBlog(id);
          Swal.fire({
            title: 'Deleted!',
            text: 'Blog deleted successfully.',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        } catch (error) {
          Swal.fire({
            title: 'Error!',
            text: 'Failed to delete blog.',
            icon: 'error',
            confirmButtonText: 'Try Again',
          });
        }
      }
    });
  };

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedBlog(null);
  };

  const formatDateTime = (date) => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    return new Date(date).toLocaleString(undefined, options);
  };

  const truncateText = (text) => {
    const words = text.split(' ');
    return words.length > 5 ? `${words.slice(0, 5).join(' ')}...` : text;
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.english.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div className="text-center text-lg font-semibold text-gray-700">Loading...</div>;
  if (error) return <div className="text-center text-lg font-semibold text-red-600">Error: {error}</div>;

  return (
    <div className="container mx-auto py-6 px-4 min-h-screen overflow-y-auto">
      <h1 className="text-3xl font-extrabold text-blue-600 mb-6 text-center">Manage Blogs</h1>

      {/* Search input */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by title..."
          className="px-4 py-2 border border-gray-300 rounded-md w-1/2"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gradient-to-r from-blue-400 to-blue-500 text-white">
            <tr>
              <th className="py-3 px-4 border-b text-left">Title</th>
              <th className="py-3 px-4 border-b text-left">Description</th>
              <th className="py-3 px-4 border-b text-left">Author</th>
              <th className="py-3 px-4 border-b text-left">Date & Time</th>
              <th className="py-3 px-4 border-b text-left">Category</th>
              <th className="py-3 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBlogs.map((blog) => (
              <tr key={blog._id} className="hover:bg-gray-50 transition duration-200 even:bg-gray-100">
                <td className="py-3 px-4 border-b text-gray-700">
                  <Link
                    to={`/blog/${blog._id}`}
                    className="text-blue-500 hover:text-blue-700 transition duration-200"
                  >
                    {truncateText(blog.title.english)}
                  </Link>
                </td>
                <td className="py-3 px-4 border-b text-gray-700">{truncateText(blog.description.english)}</td>
                <td className="py-3 px-4 border-b text-gray-700">{blog.author}</td>
                <td className="py-3 px-4 border-b text-gray-700">
                  {formatDateTime(blog.published_date)}
                </td>
                <td className="py-3 px-4 border-b text-gray-700">{blog.category}</td>
                <td className="py-3 px-4 border-b">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200 flex items-center"
                    >
                      <FaTrash className="mr-2" /> Delete
                    </button>
                    <button
                      onClick={() => handleEdit(blog)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 flex items-center"
                    >
                      <FaEdit className="mr-2" /> Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showEditModal && selectedBlog && (
        <EditBlogModal blog={selectedBlog} closeModal={handleCloseModal} />
      )}
    </div>
  );
};

export default ManageBlog;
