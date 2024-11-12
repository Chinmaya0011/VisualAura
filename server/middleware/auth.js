const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

function auth(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1]; // Bearer token

    if (!token) return res.status(403).json({ message: 'Access denied. No token provided.' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.user = decoded; // Attach user info to request object
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
}

module.exports = auth;
