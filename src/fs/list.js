import fs from "node:fs";

const list = async () => {
  if (!fs.existsSync("./src/fs/files")) {
    throw new Error("FS operation failed");
  }
  fs.readdir("./src/fs/files", (error, files) => {
    console.log(files);
  });
};

await list();
