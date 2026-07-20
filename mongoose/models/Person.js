const mongoose = require("mongoose");

const PersonPrototype = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  favoriteFoods: { type: [String], required: true },
});

module.exports = mongoose.model("Person", PersonPrototype);
