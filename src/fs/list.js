import fs from "node:fs";

const list = async () => {
  if (!fs.existsSync("./files")) {
    throw new Error("FS operation failed");
  }
  fs.readdir("./files", (error, files) => {
    console.log(files);
  });
};

await list();
