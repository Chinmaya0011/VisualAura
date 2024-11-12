const mongoose = require('mongoose');

// Blog Schema
const blogSchema = new mongoose.Schema({
    title: {
        english: { type: String, required: true },
        hinglish: { type: String, required: true }
    },
    description: {
        english: { type: String, required: true },
        hinglish: { type: String, required: true }
    },
    author: { type: String, required: true },
    published_date: { type: Date, default: Date.now },
    category: { type: String, required: true },
    tags: [String] // Optional: Tags can help categorize or filter blogs
});

// Export the model
module.exports = mongoose.model('Blog', blogSchema);
