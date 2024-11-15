import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// Create the context
const NewsletterContext = createContext();

// Custom hook to access the context easily
export const useNewsletterContext = () => useContext(NewsletterContext);

// Provider component
export const NewsletterProvider = ({ children }) => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  // Function to fetch all subscribers
  const fetchSubscribers = useCallback(async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage or context

      const response = await axios.get(`${API_URL}/newsletter/subscribers`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request header
        },
      });

      if (response.data && Array.isArray(response.data)) {
        setSubscribers(response.data); // Ensure data is an array before setting it
        setError(null); // Clear any previous errors
      } else {
        setError('Invalid data format');
      }
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError('Failed to load subscribers');
    } finally {
      setLoading(false);
    }
  }, [API_URL]);

  // Function to subscribe a user
  const subscribeUser = async (email) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage or context

      const response = await axios.post(
        `${API_URL}/newsletter/subscribe`,
        { email },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request header
          },
        }
      );

      setSuccessMessage('Successfully subscribed!');
      setError(null);
      setTimeout(() => setSuccessMessage(null), 3000); // Remove success message after 3 seconds
      fetchSubscribers(); // Refetch the subscribers after successful subscription
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError('Failed to subscribe');
      setSuccessMessage(null);
    } finally {
      setLoading(false);
    }
  };

  // Fetch subscribers when the context loads
  useEffect(() => {
    fetchSubscribers();
  }, [fetchSubscribers]); // Only fetch once when the component mounts

  return (
    <NewsletterContext.Provider
      value={{
        subscribers,
        loading,
        error,
        successMessage,
        fetchSubscribers,
        subscribeUser,
      }}
    >
      {children}
    </NewsletterContext.Provider>
  );
};
