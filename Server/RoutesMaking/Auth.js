const express = require('express');
const router = express.Router();
const { SignUp, login } = require('../controlers/auth');

// Define your routes here
router.post('/signup', SignUp);
router.post('/login', login);

module.exports = router;