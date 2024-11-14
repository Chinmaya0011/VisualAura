const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const blogRoutes = require('./routes/blog');
const quoteRoutes = require('./routes/quoteRoutes');
const contactRoutes = require('./routes/contactRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');

dotenv.config();

// Initialize express
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());  // Parse JSON body

// Public routes (no authentication required)
app.use('/api/auth', authRoutes);  // Authentication routes (login/register)

app.use('/api/blogs', blogRoutes);  // Public blog routes (no authentication)
app.use('/api/quote', quoteRoutes);  // Public quote routes (no authentication)
app.use('/api/contact', contactRoutes);  // Public contact routes (no authentication)
app.use('/api/newsletter', newsletterRoutes);  // Public newsletter routes (no authentication)

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
