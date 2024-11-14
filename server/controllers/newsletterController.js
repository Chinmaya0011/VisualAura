const Newsletter = require('../models/Newsletter');

// Controller function to subscribe a user
const subscribeUser = async (req, res) => {
  const { email } = req.body;
  try {
    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: 'Email is already subscribed.' });
    }

    // Create new subscriber
    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();
    res.status(201).json({ message: 'Successfully subscribed!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to subscribe' });
  }
};

// Controller function to get all subscribers
const getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find(); // Fetch all subscribers from the database
    res.status(200).json(subscribers); // Return subscribers as response
  } catch (error) {
    res.status(500).json({ message: 'Failed to load subscribers' });
  }
};

module.exports = { subscribeUser, getAllSubscribers };
