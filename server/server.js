const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const blogRoutes = require('./routes/blog');
const quoteRoutes = require('./routes/quoteRoutes');
const contactRoutes = require('./routes/contactRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');
const morgan = require('morgan');  // For logging HTTP requests

// Initialize dotenv to load environment variables
dotenv.config();

// Initialize express
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors()); // Allow cross-origin requests (you can restrict this for production)
app.use(express.json());  // Parse JSON request bodies

// Use morgan to log incoming HTTP requests in development environment
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Public routes (no authentication required)
app.use('/api/auth', authRoutes);  // Authentication routes (login/register)
app.use('/api/blogs', blogRoutes);  // Public blog routes (no authentication)
app.use('/api/quote', quoteRoutes);  // Public quote routes (no authentication)
app.use('/api/contact', contactRoutes);  // Public contact routes (no authentication)
app.use('/api/newsletter', newsletterRoutes);  // Public newsletter routes (no authentication)

// Error handling middleware for unexpected errors
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error details
    res.status(500).json({
        message: 'Something went wrong!',
        error: err.message || 'Internal Server Error' // Ensure error message is always returned
    });
});

// Start server
const PORT = process.env.PORT || 5000;  // Default port is 5000
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
