// src/App.js

import React, { useState, useEffect } from 'react';
import AppRoutes from './routes/route'; // Adjust the path as needed
import { BlogProvider } from './context/BlogContext';
import { AuthProvider } from './context/AuthContext';

import { NewsletterProvider } from './context/NewsletterContext';
const App = () => {


  // Render the app routes after loading
  return (
    <NewsletterProvider>
   
  
    <AuthProvider>
    <BlogProvider>

    <div>
      <AppRoutes />
    </div>
    </BlogProvider>
    </AuthProvider>
</NewsletterProvider>
  );
};

export default App;
