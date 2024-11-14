const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(403).json({ message: 'Access denied, token missing' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Attach the decoded user data to the request object
    next();  // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(400).json({ message: 'Invalid or expired token' });
  }
};

module.exports = verifyToken;
