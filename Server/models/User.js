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
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
    trim: true, // Remove whitespace from the beginning and end
  },
  password: {
    type: String,
    required: true,
  },
  userImage: {
    type: String, // Store the URL of the user's image
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post', // Reference the 'Post' model
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
