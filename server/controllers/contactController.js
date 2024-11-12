const Contact = require('../models/contactModel');

// Handle contact form submission
const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new contact document
    const newContact = new Contact({
      name,
      email,
      message,
    });

    // Save the contact document to the database
    await newContact.save();

    return res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: newContact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error submitting contact form',
      error: error.message,
    });
  }
};

module.exports = { submitContactForm };

// // controllers/contactController.js
// const nodemailer = require('nodemailer'); // For sending email (optional)

// exports.submitContactForm = async (req, res) => {
//   const { name, email, message } = req.body;

//   // Validation (basic)
//   if (!name || !email || !message) {
//     return res.status(400).json({ success: false, message: 'All fields are required.' });
//   }

//   // Optional: Send an email (using nodemailer)
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER, // Your email address
//       pass: process.env.EMAIL_PASS, // Your email password
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: 'your-email@example.com', // Replace with the email you want to send submissions to
//     subject: 'New Contact Form Submission',
//     text: `You have a new message from ${name} (${email}):\n\n${message}`,
//   };

//   try {
//     // Send the email
//     await transporter.sendMail(mailOptions);
//     return res.status(200).json({ success: true, message: 'Message sent successfully.' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ success: false, message: 'Error sending message.' });
//   }
// };
