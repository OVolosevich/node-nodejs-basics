import fs from "node:fs";
const create = async () => {
  if (fs.existsSync("./files/fresh.txt")) {
    throw new Error("FS operation failed");
  }
  fs.writeFile("./files/fresh.txt", "I am fresh and young", () => {});
};

await create();
