const Post = require("../models/Post");
const User = require("../models/User");
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dtpuvzwyu', // Replace with your Cloudinary cloud name
  api_key: '443257453111698',       // Replace with your Cloudinary API key
  api_secret: 'G_tLJ1hpiFytfIIhQY9Su9ZnQZw', // Replace with your Cloudinary API secret
});


const CreatePost = async (req, res) => {
  try {
    const { caption , userId } = req.body;
    const { file } = req.File;

    if (!file || !caption || !userId) {
      return res.status(400).json({
        success: false,
        message: "Incomplete post data",
      });
    }

    // Upload the image to Cloudinary
    const cloudinaryResponse = await cloudinary.uploader.upload(file.path, {
      folder: 'CodeHelp', // Specify the folder where you want to store the image
    });

    // Create a new post in your database with the Cloudinary image URL
    const newPost = new Post({
      userId,
      caption,
      imageUrl: cloudinaryResponse.secure_url,
    });

    // Save the new post to the database
    await newPost.save();

    // Update the user's posts array with the new post ID
    await User.findByIdAndUpdate(userId, { $push: { posts: newPost._id } });

    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


const DeletePost = async (req, res) => {
    try {
      const postId = req.params.id; // Assuming you're passing the post ID as a route parameter
  
      // Step 1: Delete the post from the Post schema
      await Post.findByIdAndDelete(postId);
  
      // Step 2: Remove the reference to the post from the User schema
      // You may need to adjust this depending on how the User schema is structured
      await User.updateMany(
        { posts: postId }, 
        { $pull: { posts: postId } } 
      );
  
      return res.status(200).json({
        success: true,
        message: "Post deleted successfully",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };


const ShowAllPost = async (req, res) => {
  try {
    // Fetch all posts from the database
    const posts = await Post.find();

    // Check if there are no posts
    if (posts.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No posts found",
      });
    }

    // Send the posts as a JSON response
    res.status(200).json({
      success: true,
      message: "Posts retrieved successfully",
      posts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


module.exports = { CreatePost , DeletePost , ShowAllPost };