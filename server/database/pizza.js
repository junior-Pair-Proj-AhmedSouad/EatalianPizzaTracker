const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;
const pizzaSchema = new mongoose.Schema({
  photo: String,
  name: String,
  price: Number,
  popularity: Number,
  description: String,
});
const Pizza = mongoose.model("Pizza", pizzaSchema);
module.exports = Pizza;
