const express = require("express");
const fs = require("fs/promises");
const moment = require("moment");
const cors = require("cors");
require("dotenv").config();

const path = require("path");

const logPath = path.join(__dirname, "public", "server.log");

const contactsRouter = require("./routes/api/contacts");
const booksRouter = require("./routes/api/books");
const authRouter = require("./routes/api/auth");
const usersRouter = require("./routes/api/users");
const commoditysRourter = require("./routes/api/commoditys");

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

app.use("/api/auth", authRouter);
app.use("/api/contacts", contactsRouter);
app.use("/api/books", booksRouter);
app.use("/api/users", usersRouter);
app.use("/api/commoditys", commoditysRourter);

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
