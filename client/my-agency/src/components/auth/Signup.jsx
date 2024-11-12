import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaLock } from 'react-icons/fa';

const Signup = () => {
  const { register, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    await register(email, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500 to-teal-600">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg transform transition-all duration-500 ">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">Signup</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSignup} className="space-y-6">
          <div className="relative">
            <label className="block text-gray-700 font-semibold">Email:</label>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:border-green-500 focus-within:shadow-md transition-all">
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
            <div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:border-green-500 focus-within:shadow-md transition-all">
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
            className="w-full py-3 mt-4 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:bg-green-600"
          >
            Signup
          </button>
          <p className="text-center mt-4 text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-green-600 font-semibold hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
