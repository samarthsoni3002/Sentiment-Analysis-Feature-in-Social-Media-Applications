const express = require('express');
const router = express.Router();
const {CreatePost,DeletePost,ShowAllPost} = require("../controlers/post");

router.post('/CreatePost',CreatePost);
router.delete('/DeletePost',DeletePost);
router.get('/ShowAllPost',ShowAllPost);

module.exports = router;