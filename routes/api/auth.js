const express = require("express");

const ctrl = require("../../conrollers/auth");

const { validateBody } = require("../../middlewares");

const { authenticate } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

//signup
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
