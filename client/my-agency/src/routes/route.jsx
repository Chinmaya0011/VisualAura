import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import FreeQuotePage from '../pages/FreeQuotePage';
import Blogs from '../pages/Blogs';
import BlogDetail from '../pages/BlogDetail';
import CreateBlogPage from '../pages/CreateBlogPage';
import ManageBlogPage from '../pages/ManageBlogPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import Dashboard from '../pages/Dashboard';
import GetContactPage from '../pages/GetContactPage';
import GetFreeQuotes from '../components/GetFreeQuotes';
import PrivateRoute from '../components/PrivateRoute'; // Import PrivateRoute

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/freeQuote" element={<FreeQuotePage />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Private/Admin Routes */}
        <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
        <Route path="/createblog" element={<PrivateRoute element={CreateBlogPage} />} />
        <Route path="/manageblog" element={<PrivateRoute element={ManageBlogPage} />} />
        <Route path="/getcontact" element={<PrivateRoute element={GetContactPage} />} />
        <Route path="/getfreequotes" element={<PrivateRoute element={GetFreeQuotes} />} />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
