const express = require("express");

const strl = require("../../conrollers/books");

const { validateBody, isValidId } = require("../../middlewares");

const schemasBooks = require("../../schemas/books");

const { authenticate } = require("../../middlewares");

const router = express.Router();

router.get("/", authenticate, strl.getAll);

router.get("/:id", isValidId, strl.getByIdBooks);

router.post("/", validateBody(schemasBooks.addSchema), strl.addBook);

router.put(
  "/:id",
  isValidId,
  validateBody(schemasBooks.addSchema),
  strl.updateBookId
);

router.delete("/:id", isValidId, strl.deleteBookId);

module.exports = router;
