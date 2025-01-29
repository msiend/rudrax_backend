require('module-alias/register');
const express = require('express');
const router = express.Router();

const middlewareMappings = require('@/middleware/middlewareMappings');
const entityControllers = require('@/controllers/entityControllers/index');
const coreEntityControllers = require('@/controllers/coreEntityControllers/index');


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
createRoutes(coreEntityControllers, 'core');



module.exports = router;
