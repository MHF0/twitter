const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
  role: { type: String, default: "user" },
});

userSchema.pre("save", async function () {
  this.email = this.email.toLowerCase();
  this.username = this.username.toLowerCase();
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("User", userSchema);
