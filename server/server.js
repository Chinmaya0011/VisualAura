const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const blogRoutes = require('./routes/blog');
const quoteRoutes = require('./routes/quoteRoutes'); // Fixed typo in 'quoteRoutes'
const contact = require('./routes/contactRoutes'); // Fixed typo here as well
dotenv.config();

// Initialize express
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());  // Parse JSON body

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/quote', quoteRoutes); // Fixed typo here as well
app.use('/api/contact', contact);  // Corrected route

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
