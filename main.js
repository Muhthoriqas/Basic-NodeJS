const sayHello = (params) => {
  console.log("Hello", params);
};

sayHello("Thoriq AS");

// Global
// console.log(global);

// OS
const os = require("os");

console.log(os.type(), os.version(), os.homedir());
console.log(__dirname);
console.log(__filename);

// Path
const path = require("path");
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));

// Module
const math = require("./logger.js");
console.log(math.add(2, 3));

const { add, subtract } = require("./logger");
console.log(add(5, 5));
console.log(subtract(5, 5));
