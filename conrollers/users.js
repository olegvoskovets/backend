const User = require("../models/user");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (_, res) => {
  const result = await User.find();

  return res.json(result);
};

// const getByIdBooks = async (req, res) => {
//   const { id } = req.params;
//   const result = await Book.findById(id);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   return res.json(result);
// };

// const addBook = async (req, res) => {
//   const data = req.body;

//   const result = await Book.create(data);

//   return res.status(201).json(result);
// };

// const updateBookId = async (req, res) => {
//   const { id } = req.params;
//   const data = req.body;

//   const result = await Book.findByIdAndUpdate(id, data, { new: true });
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }

//   return res.json(result);
// };

// const deleteBookId = async (req, res) => {
//   const { id } = req.params;

//   const result = await Book.findByIdAndRemove(id);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   return res.json(result);
// };

module.exports = {
  getAll: ctrlWrapper(getAll),
  //   getByIdBooks: ctrlWrapper(getByIdBooks),
  //   addBook: ctrlWrapper(addBook),
  //   updateBookId: ctrlWrapper(updateBookId),
  //   deleteBookId: ctrlWrapper(deleteBookId),
};
