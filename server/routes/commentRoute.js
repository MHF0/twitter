const express = require("express");

const commentRoute = express.Router();
const { createNewComment } = require("../controllers/comment");

const authentication = require("../middleware/authentication");

// http://localhost:5000/api/createComment/:tweetId
commentRoute.post("/createComment/:tweetId", authentication, createNewComment);

module.exports = commentRoute;
