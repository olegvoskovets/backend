const express = require("express");
const fs = require("fs/promises");
const moment = require("moment");
const cors = require("cors");

const app = express();

app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = moment().format("DD-MM-YYYY_hh:mm:ss");
  await fs.appendFile(".public/server.log");
  next();
});

app.use(cors());

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.listen(3000, () => console.log("Server running"));
