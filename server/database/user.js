const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: "User", enum: ["User", "Admin"] },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
