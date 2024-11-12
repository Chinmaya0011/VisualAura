// routes/quoteRoutes.js

const express = require('express');
const router = express.Router();
const { submitQuote, getAllQuotes } = require('../controllers/quoteController');

// Route to create a new quote
router.post('/submit-quote', submitQuote);

// Route to fetch all quotes (optional)
router.get('/quotes', getAllQuotes);

module.exports = router;
