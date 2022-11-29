import fs from "node:fs";

const read = async () => {
  if (!fs.existsSync("./files/fileToRead.txt")) {
    throw new Error("FS operation failed");
  }
  fs.readFile("./files/fileToRead.txt", "utf8", (error, data) => {
    console.log(data);
  });
};

await read();
