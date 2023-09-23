const User = require('../models/User');
const Post = require('../models/Post');

exports.LikePost = async (req,res) => {
    try {
        const { userId, postId } = req.body;
    
        // Check if the user and post exist
        const user = await User.findById(userId);
        const post = await Post.findById(postId);
    
        if (!user || !post) {
          return res.status(404).json({
            succes: false, 
            message: 'User or post not found' 
          });
        }
    
        // Check if the user has already liked the post
        if (post.likes.includes(userId)) {
            return res.status(400).json({
                succes: false, 
                message: 'You have already liked this post' 
            });
        }
    
        // Add the user's ID to the post's likes array
        post.likes.push(userId);
        await post.save();
    
        res.status(200).json({
            succes: true,
            message: 'Post liked successfully' 
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.unLikePost = async (req, res) => {
    try {
      const { userId, postId } = req.body;
  
      // Check if the user and post exist
      const user = await User.findById(userId);
      const post = await Post.findById(postId);
  
      if (!user || !post) {
        return res.status(404).json({ message: 'User or post not found' });
      }
  
      // Check if the user has already liked the post
      if (!post.likes.includes(userId)) {
        return res.status(400).json({ message: 'You have not liked this post' });
      }
  
      // Remove the user's ID from the post's likes array
      const indexToRemove = post.likes.indexOf(userId);
      post.likes.splice(indexToRemove, 1);
      await post.save();
  
      res.status(200).json({ message: 'Post unliked successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }