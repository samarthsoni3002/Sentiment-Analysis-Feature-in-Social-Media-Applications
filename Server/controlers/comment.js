const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

exports.CommentOnPost = async (req, res) => {
    try {
        const { userId, postId, content } = req.body;
    
        // Check if the user and post exist
        const user = await User.findById(userId);
        const post = await Post.findById(postId);
    
        if (!user || !post) {
            return res.status(404).json({ 
                success: false,
                message: 'User or post not found' 
            });
        }
    
        // Create a new comment
        const newComment = new Comment({
          userWhoCommented: userId,
          postCommented: postId,
          content,
        });
    
        await newComment.save();
    
        // Push the comment's ID into the post's comments array
        post.comments.push(newComment._id);
        await post.save();
    
        res.status(200).json({ message: 'Comment added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;
    
        // Check if the comment exists
        const comment = await Comment.findById(commentId);
    
        if (!comment) {
          return res.status(404).json({ message: 'Comment not found' });
        }
    
        // Check if the user who is deleting the comment is the author of the comment
        if (comment.userWhoCommented.toString() !== req.user.id) {
          return res.status(403).json({ message: 'You are not authorized to delete this comment' });
        }
    
        // Remove the comment from the database
        await comment.remove();
    
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.ShowComments = async (req, res) => {
    try {
      // Retrieve all comments from the database
        const comments = await Comment.find();
  
        res.status(200).json({
            success: true,
            comments,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
  }