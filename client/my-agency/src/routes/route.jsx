import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Blogs from '../pages/Blogs';
import BlogDetail from '../pages/BlogDetail';
import AIML from '../components/Blog/AIML';
import Mobiles from '../components/Blog/Mobiles';
import Laptops from '../components/Blog/Laptops';
import Gaming from '../components/Blog/Gaming';
import Gadgets from '../components/Blog/Gadgets';
import Social from '../components/Blog/Social';
import CreateBlogPage from '../pages/CreateBlogPage';
import ManageBlogPage from '../pages/ManageBlogPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from '../components/PrivateRoute';
import GetAllNewsletterPage from '../pages/GetAllNewsletterPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/aiml" element={<AIML />} />
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/gadgets" element={<Gadgets />} />
        <Route path="/social" element={<Social />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Private/Admin Routes */}
        <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
        <Route path="/createblog" element={<PrivateRoute element={CreateBlogPage} />} />
        <Route path="/manageblog" element={<PrivateRoute element={ManageBlogPage} />} />
        <Route path="/getallnewsletter" element={<PrivateRoute element={GetAllNewsletterPage} />} />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
