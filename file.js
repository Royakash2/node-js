const fs = require("fs");

// reading a text file

const readText = fs.readFileSync("./text/read.txt", "utf-8");

// write text

const writtenText = fs.writeFileSync(
  "./text/write.txt",
  readText + "this is my written text"
);

console.log(writtenText);
