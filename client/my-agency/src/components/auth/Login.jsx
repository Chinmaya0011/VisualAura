import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserAlt, FaLock } from 'react-icons/fa';

const Login = () => {
  const { login, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // If a token is already in localStorage, redirect to dashboard
    if (localStorage.getItem('token')) {
      navigate('/dashboard');
    }
  }, [navigate]); // This will run once when the component mounts

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);

    // Check if login was successful by verifying if user data exists
    if (localStorage.getItem('token')) {
      // Redirect to dashboard if login is successful
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg transform transition-all duration-500">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <label className="block text-gray-700 font-semibold">Email:</label>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:border-blue-500 focus-within:shadow-md transition-all">
              <FaUserAlt className="text-gray-500 mr-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full outline-none"
              />
            </div>
          </div>
          <div className="relative">
            <label className="block text-gray-700 font-semibold">Password:</label>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:border-blue-500 focus-within:shadow-md transition-all">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
          <p className="text-center mt-4 text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
              Sign up here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
