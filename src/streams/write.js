import fs from "node:fs";

const write = async () => {
  const stream = fs.createWriteStream("./src/streams/files/fileToWrite.txt");

  process.stdin.on("data", (data) => {
    stream.write(data);
    stream.end();
  });
};

await write();
