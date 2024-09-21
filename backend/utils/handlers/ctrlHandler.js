require("module-alias/register");

function createCtrl(funcList, filePath) {
  const controllers = {};
  funcList.forEach((funcItem) => {
    if (funcItem != "index.js") {
      const funcName = funcItem.split(".")[0];
      const ctrlName = require(`@/controllers/${filePath}/${funcName}`);
      controllers[funcName] = ctrlName;
    }
  });

  return controllers;
}

module.exports = { createCtrl };
