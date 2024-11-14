// routes/quoteRoutes.js

const express = require('express');
const router = express.Router();
const { submitQuote, getAllQuotes } = require('../controllers/quoteController');
const auth=require('../middleware/verifyToken')
// Route to create a new quote
router.post('/submit-quote', submitQuote);

// Route to fetch all quotes (optional)
router.get('/quotes', auth,getAllQuotes);

module.exports = router;
