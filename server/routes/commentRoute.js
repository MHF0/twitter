const express = require("express");

const commentRoute = express.Router();
const { createNewComment, getCommentById } = require("../controllers/comment");

const authentication = require("../middleware/authentication");

// http://localhost:5000/api/createComment/:tweetId
commentRoute.post("/createComment/:tweetId", authentication, createNewComment);
// http://localhost:5000/api/getCommentBytweetId/:tweetId
commentRoute.get(
  "/getCommentBytweetId/:tweetId",
  authentication,
  getCommentById
);

module.exports = commentRoute;
