const { error } = require("console");
const fs = require("fs");

const readTxt = fs.readFile("./text/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("error reading text");
  }
  console.log(data);
});

console.log(readTxt)