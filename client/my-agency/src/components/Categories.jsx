import React from 'react';
import { Link } from 'react-router-dom';
import { FaGamepad, FaMobileAlt, FaLaptop, FaRobot, FaCommentDots, FaTabletAlt } from 'react-icons/fa';

const Categories = () => {
  const categories = [
    { name: 'Gaming', icon: <FaGamepad />, path: '/gaming' },
    { name: 'Social', icon: <FaCommentDots />, path: '/social' },
    { name: 'Gadgets', icon: <FaTabletAlt />, path: '/gadgets' },
    { name: 'Laptop', icon: <FaLaptop />, path: '/laptop' },
    { name: 'Mobile', icon: <FaMobileAlt />, path: '/mobile' },
    { name: 'AI & ML', icon: <FaRobot />, path: '/aiml' },
  ];

  return (
    <div className="text-center p-8">
      {/* Title and Description */}
      <h1 className="p-2 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mb-5">
        Discover Our Categories
      </h1>
     

      {/* Category Cards */}
      <div className="flex flex-wrap gap-8 justify-center">
        {categories.map((category) => (
          <Link
            to={category.path}
            key={category.name}
            className="category-card group flex flex-col items-center justify-center w-36 h-36 bg-gradient-to-br from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-out hover:shadow-2xl relative overflow-hidden"
          >
            <div className="category-icon text-5xl text-white mb-2 group-hover:rotate-12 transform transition-transform duration-500 ease-in-out">
              {category.icon}
            </div>
            <h3 className="category-name text-lg font-semibold text-white drop-shadow-lg transform transition-transform duration-300 group-hover:scale-110">
              {category.name}
            </h3>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
