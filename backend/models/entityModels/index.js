const { globSync } = require('glob');
const path = require('path');

function createModels() {
  const modelItems = globSync(`./models/entityModels/*`, {
    ignore: ['index.js'],
  });
  const models = {};
  modelItems.forEach((modelItem) => {
    const modelName = path.basename(modelItem);
    if (modelName !== 'index.js') {
      const model = require(`@/models/entityModels/${modelName}/`);
      models[modelName.split('M')[0]] = model;
    }
  });

  return models;
}

module.exports = createModels();
