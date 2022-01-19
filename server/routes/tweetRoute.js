const express = require("express");

const tweetRoute = express.Router();
const {
  createNewTweet,
  updateTweet,
  deleteTweet,
  getAllTweets,
  getTweetsByUser,
  getTweetsById
} = require("../controllers/tweet");

const authentication = require("../middleware/authentication");

// http://localhost:5000/api/createTweet/
tweetRoute.post("/createTweet/", authentication, createNewTweet);

// http://localhost:5000/api/updateTweet/:tweetId
tweetRoute.put("/updateTweet/:tweetId", authentication, updateTweet);

// http://localhost:5000/api/deleteTweet/:tweetId
tweetRoute.delete("/deleteTweet/:tweetId", authentication, deleteTweet);

// http://localhost:5000/api/getAllTweets
tweetRoute.get("/getAllTweets", authentication, getAllTweets);

// http://localhost:5000/api/getUserTweets/:userId
tweetRoute.get("/getUserTweets/:userId", authentication, getTweetsByUser);

// http://localhost:5000/api/getTweets/:id
tweetRoute.get("/getTweets/:id", authentication, getTweetsById);

module.exports = tweetRoute;
