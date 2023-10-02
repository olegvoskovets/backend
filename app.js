const express = require("express");
const fs = require("fs/promises");
const moment = require("moment");
const cors = require("cors");
const dotenv = require("dotenv");

const path = require("path");

const logPath = path.join(__dirname, "public", "server.log");

const contactsRouter = require("./routes/api/contacts");
const booksRouter = require("./routes/api/books");

dotenv.config();
const app = express();

app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = moment().format("DD-MM-YYYY_hh:mm:ss");
  const log = `\n${date} ${method} ${url} `;
  // console.log(__dirname);
  await fs.appendFile(logPath, log);
  next();
});

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);
app.use("/api/books", booksRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
