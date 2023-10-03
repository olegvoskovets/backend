// const { string } = require("joi");
const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    categories: {
      type: String,
      required: true,
      default: "",
    },
    year: {
      type: String,
      math: /^\d{4}$/,
      default: "0",
      // required: true,
    },
    url: {
      type: String,
      required: true,
      default: "",
    },
    cover: {
      type: String,
      required: true,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);

bookSchema.post("save", handleMongooseError);

const Book = model("book", bookSchema);

module.exports = Book;
