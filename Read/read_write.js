const fs = require("fs");

fs.readFile("./assets/tex.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("Sucessfully");
  console.log(data);
});

process.on("uncaughtException", (err) => {
  console.error(`'Something went wrong': ${err}`);
  process.exit(1);
});
