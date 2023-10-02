const express = require("express");
const { put } = require("../../app");

const contacts = require("../../models/contacts");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const result = await contacts.listContacts();
  res.json(result);
});

router.get("/:contactId", async (req, res, next) => {
  res.json({ message: "получить контакт по ID" });
});

router.post("/", async (req, res, next) => {
  res.json({ message: "Створити новий контакт" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "Видалити контакт по ID" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "Змінюємо котакт по Id" });
});

module.exports = router;
