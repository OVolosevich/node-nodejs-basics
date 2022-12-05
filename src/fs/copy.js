import fs from "node:fs";
const copy = async () => {
  if (
    !fs.existsSync("./src/fs/files") ||
    fs.existsSync("./src/fs/files_copy")
  ) {
    throw new Error("FS operation failed");
  }
  await fs.mkdir("./src/fs/files_copy", () => {
    fs.cpSync("./src/fs/files/", "./src/fs/files_copy/", { recursive: true });
  });
};

copy();
