const moment = require("moment");

const date = moment().format("MMM Do YY");
console.log(date);

const _ = require("lodash");

const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);

console.log(myOddEvenArray);
