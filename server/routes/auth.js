const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const dotenv = require('dotenv');
const verifyToken = require('../middleware/verifyToken'); // Import the verifyToken middleware

dotenv.config();

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password' });
  }

  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error('Error creating user:', err); // Log the error
    res.status(500).json({ message: 'Error creating user' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // Compare passwords
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in' });
  }
});

// Token verification route
router.get('/verify-token', verifyToken, async (req, res) => {
  try {
    // If the token is valid, return the user data from the decoded token
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: 'Error verifying token' });
  }
});

module.exports = router;
