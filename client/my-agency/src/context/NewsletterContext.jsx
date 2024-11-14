// context/NewsletterContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
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

  // Function to fetch all subscribers
  const fetchSubscribers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/newsletter/subscribers'); // Update this with your API endpoint
      if (response.data && Array.isArray(response.data)) {
        setSubscribers(response.data);  // Ensure data is an array before setting it
        setError(null);
      } else {
        setError('Invalid data format');
      }
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError('Failed to load subscribers');
    } finally {
      setLoading(false);
    }
  };

  // Function to subscribe a user
  const subscribeUser = async (email) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/newsletter/subscribe', { email }); // POST endpoint for subscription
      setSuccessMessage('Successfully subscribed!');
      setError(null);
      // Optionally, refetch subscribers to update the list
      fetchSubscribers();
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
  }, []); // Only fetch once when the component mounts

  return (
    <NewsletterContext.Provider value={{ subscribers, loading, error, successMessage, fetchSubscribers, subscribeUser }}>
      {children}
    </NewsletterContext.Provider>
  );
};
