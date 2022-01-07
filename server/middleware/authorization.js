const authorization = (req, res, next) => {
  if (req.token.role === "user") {
    return res.status(403).json({
      success: false,
      message: `Unauthorized`,
    });
  }
  next();
};

module.exports = authorization;
