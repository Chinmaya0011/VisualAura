// src/App.js

import React, { useState, useEffect } from 'react';
import AppRoutes from './routes/route'; // Adjust the path as needed
import Loading from './components/Loading';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading delay; replace this with your actual loading logic
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after the delay
    }, 2000); // Simulating a 2-second loading time

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // Render the loading component while loading
  if (isLoading) {
    return <Loading />;
  }

  // Render the app routes after loading
  return (
    <div>
      <AppRoutes />
    </div>
  );
};

export default App;
