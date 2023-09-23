const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName:{
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
    trim: true, // Remove whitespace from the beginning and end
    lowercase: true, // Convert email to lowercase
  },
  password: {
    type: String,
    required: true,
  },
  userImage: {
    type: String, // Store the URL of the user's image
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
