const express = require('express');
const router = express.Router();
const {LikePost , unLikePost} = require("../controlers/like");

router.post("/LikePost",LikePost);
router.post("/unLikePost",unLikePost);

module.exports = router;
