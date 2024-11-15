import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get API URL from environment variables
  const API_URL = import.meta.env.VITE_API_URL;

  // Check for JWT token in localStorage and set user if token exists
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Optionally, make an API call to verify the token (handled by backend)
      axios
        .get(`${API_URL}/auth/verify-token`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data.user); // Set user data from API response
          setLoading(false);
        })
        .catch((err) => {
          setError("Session expired or invalid token");
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [API_URL]);

  // Login function
  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });
      const { token, user } = response.data;

      // Store the token in localStorage and set user
      localStorage.setItem("token", token);
      setUser(user);
      setError(null);
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  // Register function
  const register = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/auth/signup`, {
        email,
        password,
      });
      const { token, user } = response.data;

      // Store the token in localStorage and set user
      localStorage.setItem("token", token);
      setUser(user);
      setError(null);
    } catch (err) {
      setError("Registration failed");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
