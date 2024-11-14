const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the user schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true }, // Change 'username' to 'email'
    password: { type: String, required: true }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next(); // Only hash the password if it's modified
    try {
        this.password = await bcrypt.hash(this.password, 10); // Hash the password with 10 rounds
        next(); // Proceed to save the user
    } catch (error) {
        next(error); // Pass the error to the next middleware if any error occurs
    }
});

// Method to compare a plain password with the hashed password
userSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.password)
        .catch(err => {
            throw new Error('Error comparing passwords');
        });
};

// Export the user model
module.exports = mongoose.model('User', userSchema);
