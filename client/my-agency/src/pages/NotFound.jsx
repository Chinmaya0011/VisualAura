import React from 'react';
import { Link } from 'react-router-dom';  // If you're using React Router

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-xl text-gray-700 mt-4">Sorry, the page you're looking for doesn't exist.</p>
      <Link 
        to="/" 
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
