const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  tweetId: { type: mongoose.Schema.Types.ObjectId, ref: "Tweet" },
  like: { type: Number },
});

module.exports = mongoose.model("Like", likeSchema);
