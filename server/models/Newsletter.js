const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

const Newsletter = mongoose.model('Newsletter', newsletterSchema);

module.exports = Newsletter;
