const { Commodity } = require("../models/commodity");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (_, res) => {
  const result = await Commodity.find();

  return res.json(result);
};

const addCommodity = async (req, res) => {
  const { name, price, catalog } = req.body;
  const result = await Commodity.findOne({ name });
  if (result) {
    throw HttpError(409, "такий товар вже існує");
  }
  const newCommodity = await Commodity.create({
    name,
    price,
    catalog,
  });

  return res.status(201).json(newCommodity);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  addCommodity: ctrlWrapper(addCommodity),
};
