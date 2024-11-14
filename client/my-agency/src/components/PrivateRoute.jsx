import React from 'react';
import { Navigate } from 'react-router-dom';

// Function to decode JWT token and get the expiration time
const decodeToken = (token) => {
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1])); // Decode the JWT payload
  return payload.exp * 1000; // Return expiration time in milliseconds
};

const PrivateRoute = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem('token'); // Get token from localStorage
  const expirationTime = decodeToken(token);  // Decode token and get expiration time

  const isAuthenticated = token && expirationTime && Date.now() < expirationTime;  // Check if token is valid and not expired

  if (!isAuthenticated) {
    // If not authenticated or token expired, logout and redirect to login page
    localStorage.removeItem('token');  // Remove expired token
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the component
  return <Component {...rest} />;
};

export default PrivateRoute;
