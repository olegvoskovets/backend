const express = require("express");
const router = express.Router();
const strl = require("../../conrollers/users");

// const addSchemaUsers = require("../../schemas/users");

router.get("/", strl.getAll);

module.exports = router;
