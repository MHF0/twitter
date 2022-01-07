const UserModel = require("../database/models/userModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// This function checks user login credentials
const login = (req, res) => {
  const password = req.body.password;
  const email = req.body.email.toLowerCase();
  UserModel.findOne({ email })
    .then(async (result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The email doesn't exist`,
        });
      }
      try {
        const valid = await bcrypt.compare(password, result.password);
        if (!valid) {
          return res.status(403).json({
            success: false,
            message: `The password you’ve entered is incorrect`,
          });
        }
        const payload = {
          userId: result._id,
          username: result.username,
          role: result.role,
        };

        const options = {
          expiresIn: "10000000m",
        };
        const token = await jwt.sign(payload, process.env.SECRET, options);
        res.status(200).json({
          success: true,
          message: `Valid login credentials`,
          token: token,
        });
      } catch (error) {
        throw new Error(error.message);
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err,
      });
    });
};

module.exports = {
  login,
};
