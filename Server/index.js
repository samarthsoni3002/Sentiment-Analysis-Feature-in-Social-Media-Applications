const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDatabase = require("./config/database")
require('dotenv').config();


// Middleware
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

connectToDatabase();


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
