const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  description: { type: String },
});

module.exports = mongoose.model("Tweet", tweetSchema);
