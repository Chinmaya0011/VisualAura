// src/App.js

import React, { useState, useEffect } from 'react';
import AppRoutes from './routes/route'; // Adjust the path as needed
import Loading from './components/Loading';
import { SectionProvider } from './context/SectionContext';
import { BlogProvider } from './context/BlogContext';
import { AuthProvider } from './context/AuthContext';
import { FormProvider } from './context/FormContext';
import { ContactFormProvider } from './context/ContactFormContext';
const App = () => {


  // Render the app routes after loading
  return (
    <ContactFormProvider>
    <FormProvider>
    <AuthProvider>
    <BlogProvider>

    <SectionProvider>
    <div>
      <AppRoutes />
    </div>
    </SectionProvider>
    </BlogProvider>
    </AuthProvider>
</FormProvider>
</ContactFormProvider>
  );
};

export default App;
