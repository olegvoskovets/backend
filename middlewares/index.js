const validateBody = require("./validateBody");
const isValidId = require("./isValidId");

const authenticate = require("./authenticate");
const isAdmin = require("./isAdmin");

module.exports = {
  validateBody,
  isValidId,
  authenticate,
  isAdmin,
};
