const express = require('express');
const Blog = require('../models/blog');
const auth = require('../middleware/verifyToken');  // Use only auth middleware, if both are the same
const router = express.Router();

// Create a new blog (protected route)
router.post('/', auth, async (req, res) => {
    const { title, description, author, category, tags, htmlDescription } = req.body;

    // Validation for required fields
    if (!title || !title.english || !title.hinglish || !description || !description.english || !description.hinglish) {
        return res.status(400).json({ message: 'Both English and Hinglish titles and descriptions are required' });
    }

    try {
        const newBlog = new Blog({
            title,
            description,
            author,
            published_date: new Date(),
            category,
            tags,
            htmlDescription  // Include the HTML content
        });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating blog' });
    }
});

// Update a blog (protected route)
router.put('/:id', auth, async (req, res) => {
    const { title, description, author, category, tags, htmlDescription } = req.body;

    // Validation for required fields
    if ((title && (!title.english || !title.hinglish)) || (description && (!description.english || !description.hinglish))) {
        return res.status(400).json({ message: 'Both English and Hinglish titles and descriptions are required for update' });
    }

    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, {
            title,
            description,
            author,
            category,
            tags,
            htmlDescription  // Update the HTML content if present
        }, { new: true });

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.json(blog);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating blog' });
    }
});

// Delete a blog (protected route)
router.delete('/:id', auth, async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json({ message: 'Blog deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting blog' });
    }
});

// Get all blogs (public route)
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching blogs' });
    }
});

// Get a specific blog by ID (public route)
router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json(blog);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching blog' });
    }
});

module.exports = router;
