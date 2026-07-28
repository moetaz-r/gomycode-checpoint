const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const connectDb = require("./config/connectDb");
require("dotenv").config();
const PORT = 5000;
connectDb();
app.use("/api/users", require("./Routes/user"));
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
