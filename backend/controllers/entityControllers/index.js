const { globSync } = require('glob');
const path = require('path');
require('module-alias/register');

function coreEntityControllers() {
  const controllerItems = globSync(`./controllers/entityControllers/*`, {
    ignore: ['index.js'],
  });
  const controllers = {};
  controllerItems.forEach((ctrlItem) => {
    const ctrlName = path.basename(ctrlItem);
    if (ctrlName !== 'index.js') {
      const controller = require(`@/controllers/entityControllers/${ctrlName}`);
      controllers[ctrlName] = controller;
    }
  });

  return controllers;
}

module.exports = coreEntityControllers();
