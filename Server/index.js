const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload'); // Import express-fileupload
const connectToDatabase = require('./config/database');
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
