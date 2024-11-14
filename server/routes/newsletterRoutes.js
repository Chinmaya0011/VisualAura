// routes/newsletter.js
const express = require('express');
const router = express.Router();
const { subscribeUser, getAllSubscribers } = require('../controllers/newsletterController');
const auth=require('../middleware/verifyToken')

// POST route to subscribe a user
router.post('/subscribe', subscribeUser);

// GET route to fetch all subscribers
router.get('/subscribers',auth, getAllSubscribers);

module.exports = router;
