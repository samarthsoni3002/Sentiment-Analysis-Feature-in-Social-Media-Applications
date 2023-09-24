const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload'); // Import express-fileupload
const connectToDatabase = require('./config/database');
const authRoutes = require('./RoutesMaking/Auth'); // Correct module name
const postRoutes = require('./RoutesMaking/PostR');
const LikeRoutes = require("./RoutesMaking/LikeR");
const commentRoutes = require("./RoutesMaking/CommentR");
require('dotenv').config();

connectToDatabase();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp',
  })
);

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

const port = process.env.PORT || 3000;

app.use('/api/v1/auth', authRoutes); 
app.use('/api/v1/post', postRoutes); 
app.use('/api/v1/like', LikeRoutes); 
app.use('/api/v1/comment', commentRoutes); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
