const express = require('express');
const router = express.Router();
const {CommentOnPost,deleteComment,ShowComments} = require("../controlers/comment");

router.post("/CommentOnPost",CommentOnPost);
router.delete("/deleteComment",deleteComment);
router.get("/ShowComments",ShowComments);

module.exports = router;