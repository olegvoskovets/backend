const Joi = require("joi");

const addSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  categories: Joi.string().required(),
  year: Joi.string(),
  url: Joi.string().required(),
  cover: Joi.string().required(),
});

module.exports = {
  addSchema,
};
