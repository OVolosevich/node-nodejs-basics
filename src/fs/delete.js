import fs from "node:fs";

const remove = async () => {
  if (!fs.existsSync("./src/fs/files/fileToRemove.txt")) {
    throw new Error("FS operation failed");
  }
  fs.unlink("./src/fs/files/fileToRemove.txt", (e) => {});
};

await remove();
