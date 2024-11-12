// components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  // Replace with your actual authentication and role checking logic
  const isAuthenticated = localStorage.getItem('token'); // Check for token in local storage
  const isAdmin = localStorage.getItem('role') === 'admin'; // Check if role is admin

  return isAuthenticated && isAdmin ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/" replace /> // Redirect to home if not authorized
  );
};

export default PrivateRoute;
