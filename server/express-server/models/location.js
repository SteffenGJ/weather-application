const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  name: String,
  country: String,
});

module.exports = mongoose.model("Location", locationSchema);
