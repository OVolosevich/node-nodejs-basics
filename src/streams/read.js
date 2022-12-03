import fs from "node:fs";
const read = async () => {
  const stream = fs.createReadStream('./src/streams/files/fileToRead.txt');
   stream.on("data", (data) => {
     process.stdout.write(data.toString());
   });
};

await read();