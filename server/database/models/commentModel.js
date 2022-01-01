const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  tweetId: { type: mongoose.Schema.Types.ObjectId, ref: "Tweet" },
  comment: { type: String },
});

module.exports = mongoose.model("Comment", commentSchema);
