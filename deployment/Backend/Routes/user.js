const express = require("express");
const Route = express.Router();
const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

Route.post("/register", async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    console.log("USER CREATED:", newUser);

    return res.status(201).json({
      message: "User registered",
      user: newUser,
    });
  } catch (error) {
    console.log("🔥 REGISTER ERROR:", error);
    return res.status(500).json({ message: error.message });
  }
});

Route.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    User.findOne({ email: email }).then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result) {
            const token = jwt.sign(
              { name: user.name, email: user.email },
              process.env.JWT_SECRET,
              { expiresIn: "7d" },
              (err, token) => {
                if (err) throw err;
                res.status(200).json({
                  message: "Login successful",
                  token,
                });
              }
            );
          } else {
            return res.status(401).json({ message: "Invalid password" });
          }
        });
      } else {
        return res.status(404).json({ message: "Invalid credentials" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = Route;
