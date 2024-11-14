import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const { login, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // If a token is already in localStorage, redirect to dashboard
    if (localStorage.getItem('token')) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);

    // Check if login was successful by verifying if user data exists
    if (localStorage.getItem('token')) {
      // Redirect to dashboard if login is successful
      navigate('/dashboard');
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    error,
  };
};

export default useLogin;
