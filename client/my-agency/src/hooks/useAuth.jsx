// hooks/useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user has a token stored in localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // If a token exists, set isLoggedIn to true
  }, []); // Empty dependency array to run once on mount

  return isLoggedIn;
};

export default useAuth;
