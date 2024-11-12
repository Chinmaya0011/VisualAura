// src/App.js

import React, { useState, useEffect } from 'react';
import AppRoutes from './routes/route'; // Adjust the path as needed
import Loading from './components/Loading';
import { SectionProvider } from './context/SectionContext';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating page loading logic without setTimeout
  useEffect(() => {
    // You can replace this with actual logic such as fetching data, or waiting for the app to be ready
    setIsLoading(false); // Immediately set loading to false after initial load
  }, []);

  // Render the loading component while loading
  if (isLoading) {
    return <Loading />;
  }

  // Render the app routes after loading
  return (
    <SectionProvider>
    <div>
      <AppRoutes />
    </div>
    </SectionProvider>
  );
};

export default App;
