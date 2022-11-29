import fs from "node:fs";
const copy = async () => {
  if (!fs.existsSync("./files") || fs.existsSync("./files_copy")) {
    throw new Error("FS operation failed");
  }
  await fs.mkdir("./files_copy", () => {
    fs.cpSync("./files/", "./files_copy/", { recursive: true });
  });
};

copy();
