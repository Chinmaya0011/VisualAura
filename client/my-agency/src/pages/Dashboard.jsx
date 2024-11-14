import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCogs, FaEnvelope, FaPenNib, FaClipboardList, FaMailBulk,FaHome  } from 'react-icons/fa';
import { MdRequestPage } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Define admin-only menu items with unique icons and route paths matching AppRoutes
  const menuItems = [
    { name: 'Settings', icon: <AiOutlineSetting />, route: '/settings' },
    { name: 'Home', icon: <FaHome />, route: '/' }, // Added Home with FaHome icon

    { name: 'Create Blog', icon: <FaPenNib />, route: '/createblog' },
    { name: 'Manage Blogs', icon: <FaClipboardList />, route: '/manageblog' },
    { name: 'See All Newsletters', icon: <FaMailBulk />, route: '/newsletters' }, // Unique icon for newsletters
  ];

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear user session
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 mb-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.route)}
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-gray-700 cursor-pointer"
          >
            <div className="text-5xl mb-2">{item.icon}</div>
            <span className="mt-2 text-lg font-semibold">{item.name}</span>
          </div>
        ))}
      </div>
      <button
        onClick={handleLogout}
        className="mt-auto py-3 px-6 bg-red-600 hover:bg-red-700 rounded-lg shadow-lg text-lg font-semibold flex items-center"
      >
        <BiLogOut className="mr-2 text-xl" /> Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
