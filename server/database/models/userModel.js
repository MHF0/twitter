const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  birthday: { type: Date },
  bio: { type: String },
  password: { type: String, required: true },
  location: { type: String },
  website: { type: String },
  phonenumber: { type: String },
  age: { type: Number },
});

module.exports = mongoose.model("User", userSchema);
