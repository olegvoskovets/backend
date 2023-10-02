const express = require("express");

const strl = require("../../conrollers/books");

const { validateBody } = require("../../middlewares");

const schemasBooks = require("../../schemas/books");

const router = express.Router();

router.get("/", strl.getAll);

router.get("/:booksId", strl.getByIdBooks);

router.post("/", validateBody(schemasBooks.addSchema), strl.addBook);

router.put(
  "/:booksId",
  validateBody(schemasBooks.addSchema),
  strl.updateBookId
);

router.delete("/:booksId", strl.deleteBookId);

module.exports = router;
