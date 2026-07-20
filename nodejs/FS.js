const fs = require("fs");

// Create file
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created!");
  }

  // Read file
  fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
