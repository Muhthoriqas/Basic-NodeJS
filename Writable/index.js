const fs = require("fs");

const readableStream = fs.createReadStream("input.txt", {
  highWaterMark: 15,
});

const writableStream = fs.createWriteStream("nah.txt");

readableStream.on("readable", () => {
  try {
    // (`${readableStream.read()}`);
    writableStream.write(`[${readableStream.read()}] \n`);
  } catch (error) {
    console.log(error);
  }
});

readableStream.on("end", () => {
  console.log("Done");
});
