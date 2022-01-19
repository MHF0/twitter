const UserModel = require("../database/models/userModel");

const createNewUser = (req, res) => {
  const { username, email, birthday, password, role } = req.body;

  const newUser = new UserModel({
    username,
    email,
    birthday,
    password,
    role,
  });

  newUser
    .save()
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "The user has been created successed",
        result,
      });
    })
    .catch((err) => {
      if (err.keyPattern) {
        return res.status(409).json({
          success: false,
          message: `The email already exists`,
        });
      }
      res.status(404).json({
        success: false,
        message: "Check the input first",
        err,
      });
    });
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const {
    name,
    email,
    birthday,
    password,
    username,
    bio,
    location,
    website,
    phonenumber,
    age,
  } = req.body;

  const updateUser = {
    name,
    email,
    birthday,
    password,
    username,
    bio,
    location,
    website,
    phonenumber,
    age,
  };

  UserModel.findOneAndUpdate({ _id: id }, updateUser, { new: true })
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "The user has been Updated successed",
        result,
      });
    })
    .catch((err) => {
      res.status(409).json({
        success: false,
        message: "Erorr happend while Updated",
        err,
      });
    });
};

const deleteUser = (req, res) => {
  // take the task value from the endpoint
  const id = req.params.id;

  // find the task and delete it, we use (findOneAndDelete) this is a mongoDB method to delete the task
  UserModel.findOneAndDelete({ _id: id })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "The user has been deleted successed",
        result,
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        message: "Erorr happend while Deleted",
        err,
      });
    });
};

const getAllUser = (req, res) => {
  UserModel.find({})
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "All users",
        result,
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        message: "Erorr happend while Get All user",
        err,
      });
    });
};

const getUserById = (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Get the user has been success",
        result,
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        message: "Erorr happend while Get the user",
        err,
      });
    });
};

module.exports = {
  createNewUser,
  updateUser,
  deleteUser,
  getAllUser,
  getUserById,
};
