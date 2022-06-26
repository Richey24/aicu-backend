const { Schema, model } = require("mongoose");

const UrlSchema = new Schema({
  urlCode: {
    type: String,
  },
  shortUrl: {
    type: String,
  },
  longUrl: {
    type: String,
  },
});

module.exports = model("Url", UrlSchema);
