require('module-alias/register');

const express = require('express');

const router = express.Router();

const featureControllers = require('@/controllers/featureControllers/index');
const entityControllers = require('@/controllers/entityControllers/index');

const middleware1 = (req, res, next) => {
  console.log('Middleware 1 executed');
  next();
};

const middleware2 = (req, res, next) => {
  console.log('Middleware 2 executed');
  next();
};

const middleware3 = (req, res, next) => {
  console.log('Middleware 3 executed');
  next();
};

const middleware4 = (req, res, next) => {
  console.log('Middleware 4 executed');
  next();
};
const middlewareMappings = {
  feature: {
    exampleFeatureController: [middleware4],
  },
  entity: {
    projectController: {
      findAll: [middleware1, middleware2],
      create:[middleware1, middleware2],
    },
    anotherEntityController: [middleware3],
  },
};

function createRoutes(controllerBox, prefix) {
  Object.keys(controllerBox).forEach((key) => {
    const { findAll, findOne, create, update, remove, paginate } = controllerBox[key];
    const controllerMiddlewares = middlewareMappings[prefix]?.[key] || {};

    if (findAll) router.get(`/${prefix}/${key.split('C')[0]}/read-data`, [...controllerMiddlewares.findAll||[], findAll]);
    if (findOne) router.get(`/${prefix}/${key.split('C')[0]}/read-one`, [...controllerMiddlewares.findOne||[], findOne]);
    if (create) router.post(`/${prefix}/${key.split('C')[0]}/create-data`, [...controllerMiddlewares.create||[], create]);
    if (update) router.put(`/${prefix}/${key.split('C')[0]}/update-data`, [...controllerMiddlewares.update||[], update]);
    if (remove) router.get(`/${prefix}/${key.split('C')[0]}/remove-data`, [...controllerMiddlewares.remove||[], remove]);
    if (paginate) router.get(`/${prefix}/${key.split('C')[0]}/paginate-data`, [...controllerMiddlewares.paginate||[], paginate]);
  });
}

createRoutes(entityControllers, 'entity');
createRoutes(featureControllers, 'feature');

module.exports = router;
