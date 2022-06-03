const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost/pizza";
const Pizza = require("./pizza.js");
const User = require("./user.js");
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

//GET ALL USERS FROM THE DB
const getAllUsers = function (cb) {
  User.find({}, (err, res) => {
    err ? cb(err, null) : cb(null, res);
  });
};

//GET ONE USER
const getOneUserByEmail = function (email, cb) {
  User.findOne({ email: email }, (err, res) => {
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
// const updatePopularity =  function (popularity) {
//   return  Pizza.updateOne({ popularity: popularity });
// };

//DELETE PIZZA FROM DB
const deletePizza = function (id) {
  Pizza.findOneAndDelete({ _id: id });
};

module.exports = {
  db,
  getAllPizzas,
  addPizza,
  // updatePopularity,
  getAllUsers,
  deletePizza,
  getOneUserByEmail,
};
