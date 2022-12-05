import fs from "node:fs";

const read = async () => {
  if (!fs.existsSync("./src/fs/files/fileToRead.txt")) {
    throw new Error("FS operation failed");
  }
  fs.readFile("./src/fs/files/fileToRead.txt", "utf8", (error, data) => {
    console.log(data);
  });
};

await read();
