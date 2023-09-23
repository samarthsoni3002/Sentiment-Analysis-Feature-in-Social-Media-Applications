const Post = require("../models/Post");
const User = require("../models/User");
const cloudinary = require('./cloudinaryConfig');

exports.CreatePost = async (req, res) => {
  try {
    const { caption } = req.body;
    const { files } = req;

    if (!files || !files.image) {
      return res.status(401).json({
        success: false,
        message: "Image Uploading Error",
      });
    }

    const folder = ""; // Specify your desired folder in Cloudinary
    const height = 300; // Set the desired height (optional)
    const quality = "auto"; // Set the desired quality (optional)

    // Function to upload an image to Cloudinary
    const uploadImageToCloudinary = async (file, folder, height, quality) => {
      const options = { folder };
      if (height) {
        options.height = height;
      }
      if (quality) {
        options.quality = quality;
      }
      options.resource_type = "auto";

      return await cloudinary.uploader.upload(file.tempFilePath, options);
    };

    // Upload the image to Cloudinary
    const response = await uploadImageToCloudinary(files.image, folder, height, quality);

    // Create a new post in your database with the image URL and caption
    const newPost = new Post({
      imageUrl: response.secure_url, // Assuming the Cloudinary response contains the secure URL
      caption,
    });

    // Save the new post to the database
    await newPost.save();

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



exports.DeletePost = async (req, res) => {
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


exports.ShowAllPost = async (req, res) => {
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
