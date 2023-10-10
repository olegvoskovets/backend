const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const catalogsEnum = require("../date/catalogs.json");
console.log("catalogsEnum", catalogsEnum);

const commoditySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    catalog: {
      type: String,
      enum: catalogsEnum,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

commoditySchema.post("save", handleMongooseError);

const Commodity = model("commodity", commoditySchema);
module.exports = {
  Commodity,
};
