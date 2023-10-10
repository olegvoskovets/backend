const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  urlFoto: Joi.string(),
});

module.exports = {
  registerSchema,
};
