import fs from "node:fs";

const rename = async () => {
  if (
    !fs.existsSync("./src/fs/files/wrongFilename.txt") ||
    fs.existsSync("./src/fs/files/properFilename.md")
  ) {
    throw new Error("FS operation failed");
  }
  fs.rename("./src/fs/files/wrongFilename.txt", "./src/fs/files/properFilename.md", () => {});
};

await rename();
