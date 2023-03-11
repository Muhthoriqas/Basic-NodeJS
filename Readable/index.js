const fs = require("fs");

const readableStream = fs.createReadStream("article.txt", {
  highWaterMark: 5,
});

readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {
    console.log(error);
  }
});

readableStream.on("end", () => {
  console.log("Done");
});
