const books = require("../models/books");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (_, res) => {
  const result = await books.getAll();

  return res.json(result);
};

const getByIdBooks = async (req, res) => {
  const { booksId } = req.params;
  const result = await books.getById(booksId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  return res.json(result);
};

const addBook = async (req, res) => {
  const data = req.body;

  const result = await books.addBook(data);

  return res.status(201).json(result);
};

const updateBookId = async (req, res) => {
  const { booksId } = req.params;
  const data = req.body;

  const result = await books.updateById(booksId, data);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  return res.json(result);
};

const deleteBookId = async (req, res) => {
  const { booksId } = req.params;

  const result = await books.deleteById(booksId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  return res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getByIdBooks: ctrlWrapper(getByIdBooks),
  addBook: ctrlWrapper(addBook),
  updateBookId: ctrlWrapper(updateBookId),
  deleteBookId: ctrlWrapper(deleteBookId),
};
