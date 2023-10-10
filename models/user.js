const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const emailRegext =
  /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/;
//  /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: emailRegext,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },

    urlFoto: {
      type: String,
      default: null,
    },
    token: {
      type: String,
      default: "",
    },
    admin: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegext).required(),
  password: Joi.string().min(6).required(),
  urlFoto: Joi.string(),
  admin: Joi.string(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegext).required(),
  password: Joi.string().min(6).required(),
});

userSchema.post("save", handleMongooseError);

const schemas = {
  registerSchema,
  loginSchema,
};
const User = model("user", userSchema);
module.exports = {
  User,
  schemas,
};
