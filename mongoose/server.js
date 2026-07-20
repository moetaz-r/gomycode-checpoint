const mongoose = require("mongoose");
require("dotenv").config();
const Person = require("./models/Person");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

// Create a document
const newPerson = new Person({
  name: "Alice Johnson",
  age: 32,
  favoriteFoods: ["ice cream", "chocolate"],
});
newPerson
  .save()
  .then((savedPerson) => {
    console.log("Person saved: ", savedPerson);
  })
  .catch((err) => console.log(err));

// Create multiple documents
Person.create([
  {
    name: "John Doe",
    age: 30,
    favoriteFoods: ["pizza", "pasta"],
  },
  {
    name: "Mary Doe",
    age: 52,
    favoriteFoods: ["pizza", "sweets"],
  },
  {
    name: "Mary Johnson",
    age: 29,
    favoriteFoods: ["chips", "meat"],
  },
  {
    name: "Peter Parker",
    age: 22,
    favoriteFoods: ["burritos", "dumplings"],
  },
  {
    name: "Lucy Liu",
    age: 34,
    favoriteFoods: ["noodles", "burritos"],
  },
  { name: "Jane Smith", age: 25, favoriteFoods: ["sushi", "ramen"] },
  {
    name: "Sam Brown",
    age: 28,
    favoriteFoods: ["steak", "salad"],
  },
])
  .then((people) => {
    console.log("People added: ", people);
  })
  .catch((err) => console.log(err));

// Find documents
Person.find({ name: "John Doe" })
  .then((people) => {
    console.log("People found: ", people);
  })
  .catch((err) => console.log(err));

Person.findOne({ favoriteFoods: "sushi" })
  .then((person) => {
    console.log("Person found: ", person);
  })
  .catch((err) => console.log(err));

Person.findById("694816bd182757e8f132588")
  .then((person) => {
    console.log("Person found by ID: ", person);
  })
  .catch((err) => console.log(err));

//    Update a document
Person.findByIdAndUpdate(
  "694816bd182757e8f132588b",
  { $push: { favoriteFoods: "hamburger" } },
  { new: true }
)
  .then((updatedPerson) => {
    console.log("Updated Person: ", updatedPerson);
  })
  .catch((err) => console.log(err));

//    Update a document
Person.findOneAndUpdate({ name: "Alice Johnson" }, { age: 20 }, { new: true })
  .then((updatedPerson) => {
    console.log("Updated Person: ", updatedPerson);
  })
  .catch((err) => console.log(err));

//    Delete a document
Person.findOneAndDelete("694816bd182757e8f132588a")
  .then((removedPerson) => {
    console.log("Removed Person: ", removedPerson);
  })
  .catch((err) => console.log(err));

//    Delete a document
Person.deleteMany({ name: "Mary" })
  .then((result) => {
    console.log("Delete Result: ", result);
  })
  .catch((err) => console.log(err));

//    Chain Search Query Helpers
Person.find({ favoriteFoods: "burritos" })
  .sort({ name: 1 })
  .limit(2)
  .select("-age")
  .exec()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
