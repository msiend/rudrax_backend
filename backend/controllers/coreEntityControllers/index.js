const { globSync } = require('glob');
const path = require('path');
require('module-alias/register');

function coreEntityControllers() {
  const controllerItems = globSync(`./controllers/coreEntityControllers/*`, {
    ignore: ['index.js'],
  });
  const controllers = {};
  controllerItems.forEach((ctrlItem) => {
    const ctrlName = path.basename(ctrlItem);
    if (ctrlName !== 'index.js') {
      const controller = require(`@/controllers/coreEntityControllers/${ctrlName}`);
      controllers[ctrlName] = controller;
    }
  });
  return controllers;
}

module.exports = coreEntityControllers();
