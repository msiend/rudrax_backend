const { globSync } = require('glob');
const path = require('path');
require('module-alias/register');

function featureControllers() {
  const controllerItems = globSync(`./controllers/featureControllers/*`, {
    ignore: ['index.js'],
  });
  const controllers = {};
  controllerItems.forEach((ctrlItem) => {
    const ctrlName = path.basename(ctrlItem);
    if (ctrlName !== 'index.js') {
      const controller = require(`@/controllers/featureControllers/${ctrlName}`);
      controllers[ctrlName] = controller;
    }
  });

  return controllers;
}

module.exports = featureControllers();
