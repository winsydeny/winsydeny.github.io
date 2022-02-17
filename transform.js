const fs = require("fs");
const crypto = require("crypto");
const path = require("path");
const location = "./markdown";
const markdowns = fs.readdirSync(location);

const traves = (file) => {
  const fileLocation = path.resolve(location, file);
  return fs.readFileSync(fileLocation, "utf-8");
};

function transformJson(fileList) {
  const list = [];
  fileList.forEach((file) => {
    const content = traves(file);
    const fileHash = calculateHash(content);
    list.push({
      fileName: file,
      hash: fileHash,
      content: content,
    });
  });
  return list;
}
function calculateHash(content) {
  const hash = crypto.createHash("md5");
  hash.update(content);
  const fileHash = hash.digest("hex");
  return fileHash;
}

function writeJson(list) {
  const str = JSON.stringify(list);
  fs.writeFileSync("./src/md/manifest.json", str, "utf-8");
}

console.log(">>>> start transformed !");
const list = transformJson(markdowns);
writeJson(list);
