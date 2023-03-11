const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ jenis }) => {
  console.log(`Kopi ${jenis} telah dibuat!`);
};

const pelangganCoffe = ({ customer }) => {
  console.log(`Oleh ${customer}`);
};

// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
myEventEmitter.on("customer-order", makeCoffee);
myEventEmitter.on("customer-order", pelangganCoffe);

// myEventEmitter.emit("coffee-order", { jenis: "Tubruk" });
// myEventEmitter.emit("customer-order", { customer: "Thoriq" });
myEventEmitter.emit("customer-order", {
  jenis: "Torabika",
  customer: "Thoriq",
});

const birthdayEventListener = ({ name }) => {
  console.log(`Happy birthday ${name}!`);
};

myEventEmitter.on("user-birthday", birthdayEventListener);
myEventEmitter.emit("user-birthday", { name: "Hastinawati" });
