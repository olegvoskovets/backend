const express = require("express");

const ctrl = require("../../conrollers/commoditys");

const { validateBody } = require("../../middlewares");

const { authenticate } = require("../../middlewares");

const { schemas } = require("../../models/user");

const { isAdmin } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrl.getAll);
router.post("/", authenticate, isAdmin, ctrl.addCommodity);

module.exports = router;
