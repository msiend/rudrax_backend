require('module-alias/register');

const express = require('express');

const router = express.Router();

const entityControllers = require('@/controllers/entityControllers/index');
const featureControllers = require('@/controllers/featureControllers/index');

function createRoutes(controllerBox, prefix) {
  Object.keys(controllerBox).forEach((key) => {
    const { findAll, findOne, create, update, remove, paginate } = controllerBox[key];
    if (findAll) router.get(`/${prefix}/${key.split('C')[0]}/read-data`, findAll);
    if (findOne) router.get(`/${prefix}/${key.split('C')[0]}/read-one`, findOne);
    if (create) router.post(`/${prefix}/${key.split('C')[0]}/create-data`, create);
    if (update) router.put(`/${prefix}/${key.split('C')[0]}/update-data`, update);
    if (remove) router.get(`/${prefix}/${key.split('C')[0]}/remove-data`, remove);
    if (paginate) router.get(`/${prefix}/${key.split('C')[0]}/paginate-data`, paginate);
  });
}

createRoutes(entityControllers, 'entity');
createRoutes(featureControllers, 'feature');

module.exports = router;
