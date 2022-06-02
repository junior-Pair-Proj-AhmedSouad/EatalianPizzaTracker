const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost/pizza";
const Pizza = require("./pizza.js");
mongoose.connect(
  mongoUri,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("db connected");
  }
);
const db = mongoose.connection;
//GET ALL PIZZAS FROM THE DATABASE
const getAllPizzas = function (cb) {
  Pizza.find({}, (err, res) => {
    err ? cb(err, null) : cb(null, res);
  });
};

//ADD PIZZA TO DATABASE
const addPizza = function (photo, name, price, popularity, description) {
  return Pizza.create({
    photo: photo,
    name: name,
    price: price,
    popularity: popularity,
    description: description,
  });
};

//INCREMENT POPULARITY
const updatePopularity = async function (popularity) {
  return await Pizza.updateOne({ popularity: popularity });
};

module.exports = {
  db,
  getAllPizzas,
  addPizza,
  updatePopularity,
};
