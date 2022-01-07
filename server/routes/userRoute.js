const express = require("express");

const userRoute = express.Router();
const {
  createNewUser,
  updateUser,
  deleteUser,
  getAllUser,
  getUserById,
} = require("../controllers/user");

// http://localhost:5000/api/users

userRoute.post("/users", createNewUser);
// http://localhost:5000/api/updateUser/:id
userRoute.put("/updateUser/:id", updateUser);

// Auth, admin check
// http://localhost:5000/api/deleteUser/:id
userRoute.delete("/deleteUser/:id", deleteUser);
// Auth check
// http://localhost:5000/api/getAllUser
userRoute.get("/getAllUser", getAllUser);

// Auth check
// http://localhost:5000/api/getUser/:id
userRoute.get("/getUser/:id", getUserById);

module.exports = userRoute;
