const fs = require("fs");
const path = require("path");
const args = process.argv.slice(2);

function SetupNow(folderName, type, featureType) {
  const subtype =
    featureType == "entity" ? `entity${type}s` : `feature${type}s`;
  const baseDir = path.join(
    __dirname,
    `../${type == "Model" ? "models" : "controllers"}/${subtype}`,
  );
  const newFolder = path.join(baseDir, `${folderName}${type}`);
  if (!fs.existsSync(newFolder)) {
    fs.mkdirSync(newFolder, { recursive: true });
    fs.writeFileSync(
      path.join(newFolder, "index.js"),
      `//Hello, this is a ${type} for ${folderName}!`,
    );
    console.log("New feature created successfully");
  } else {
    throw new Error("This feature already exist!");
  }
}

SetupNow(args[0], "Model", args[1]);
SetupNow(args[0], "Controller", args[1]);
