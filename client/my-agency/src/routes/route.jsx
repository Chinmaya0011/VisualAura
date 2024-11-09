// src/routes/route.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'; // Update path according to your folder structure
import About from '../pages/About'; // Create this component if not existing
import Services from '../pages/Services'; // Create this component if not existing
import Portfolio from '../pages/Portfolio'; // Create this component if not existing
import Contact from '../pages/Contact'; // Create this component if not existing
import NotFound from '../pages/NotFound'; // Create a NotFound component for 404 errors
import FreeQuotePage from '../pages/FreeQuotePage';
import Blogs from '../pages/Blogs';
import BlogDetail from '../pages/BlogDetail';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/freeQuote" element={<FreeQuotePage />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetail />} /> {/* Individual blog page */}

        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
