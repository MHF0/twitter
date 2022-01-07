const express = require("express");

const userRoute = express.Router();
const {
  createNewUser,
  updateUser,
  deleteUser,
  getAllUser,
  getUserById,
} = require("../controllers/user");

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

// http://localhost:5000/api/users
userRoute.post("/users", createNewUser);

// http://localhost:5000/api/updateUser/:id
userRoute.put("/updateUser/:id", authentication, updateUser);

// Auth, admin check
// http://localhost:5000/api/deleteUser/:id
userRoute.delete("/deleteUser/:id", authentication, authorization, deleteUser);

// Auth check
// http://localhost:5000/api/getAllUser
userRoute.get("/getAllUser", authentication, getAllUser);

// Auth check
// http://localhost:5000/api/getUser/:id
userRoute.get("/getUser/:id", authentication, getUserById);

module.exports = userRoute;
