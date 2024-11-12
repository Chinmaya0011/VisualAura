const Quote = require('../models/quoteModel'); // Make sure the path to your model is correct

// Define the submitQuote function
const submitQuote = async (req, res) => {
  try {
    const { name, email, mobile, projectDetails, service, meetingDate, meetingTime, professionalType } = req.body;

    // Create a new quote instance with the data from the request
    const newQuote = new Quote({
      name,
      email,
      mobile,
      projectDetails,
      service,
      meetingDate,
      meetingTime,
      professionalType,
    });

    // Save the quote to the database
    await newQuote.save();

    res.status(201).json({ success: true, message: 'Quote submitted successfully', data: newQuote });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error submitting quote', error: error.message });
  }
};

// Define the getAllQuotes function
const getAllQuotes = async (req, res) => {
  try {
    // Fetch all quotes from the database
    const quotes = await Quote.find();
    res.status(200).json({ success: true, quotes });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching quotes', error: error.message });
  }
};

// Export the functions
module.exports = { submitQuote, getAllQuotes };
