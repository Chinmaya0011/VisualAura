const mongoose = require('mongoose');

// Define the schema for the quote request
const quoteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    projectDetails: { type: String, required: true },
    service: { type: String, required: true },
    meetingDate: { type: String, required: true },
    meetingTime: { type: String, required: true },
    professionalType: { type: String, required: true },
  },
  { timestamps: true }
);

// Create a model from the schema
const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
