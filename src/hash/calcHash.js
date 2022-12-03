import fs from "node:fs";
import crypto from "node:crypto";

const calculateHash = async () => {

   fs.readFile("./src/hash/files/fileToCalculateHashFor.txt", (error, data) => {
    const result = crypto.createHash("SHA256").update(data).digest('hex');
    console.log(result)
   });
};

await calculateHash();