const { HttpError } = require("../helpers");

const isAdmin = (req, res, next) => {
  const { admin } = req.user;

  if (!admin) {
    next(HttpError(401, "No ADMIN"));
  }
  next();
};

module.exports = isAdmin;
