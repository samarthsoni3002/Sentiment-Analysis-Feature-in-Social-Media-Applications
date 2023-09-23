const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  userWhoLiked: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  postLiked: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post', // Assuming you have a Post model
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
