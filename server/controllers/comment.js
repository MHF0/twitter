const CommentModel = require("../database/models/commentModel");

const createNewComment = (req, res) => {
  const userId = req.token.userId;
  const { comment, date } = req.body;
  const tweetId = req.params.tweetId;

  const newcomment = new CommentModel({
    userId,
    comment,
    date,
    tweetId,
  });

  newcomment
    .save()
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "The comment has been created successed",
        result,
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        message: "Server err",
        err,
      });
    });
};

const getCommentById = (req, res) => {
  const tweetId = req.params.tweetId;

  CommentModel.find({ tweetId })
    .populate("tweetId")
    .populate("userId")
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "The comment has been created successed",
        result,
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        message: "Server err",
        err,
      });
    });
};

module.exports = {
  createNewComment,
  getCommentById,
};
