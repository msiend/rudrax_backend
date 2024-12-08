require('module-alias/register');

const express = require('express');

const router = express.Router();

const entityControllers = require('@/controllers/entityControllers/index');

function createRoutes(controllerBox, prefix) {
  Object.keys(controllerBox).forEach((key) => {
    const { findAll, create, update, remove, paginate } = controllerBox[key];
    if (findAll) router.get(`/${prefix}/${key.split('C')[0]}/read-data`, findAll);
    if (create) router.post(`/${prefix}/${key.split('C')[0]}/create-data`, create);
    if (update) router.get(`/${prefix}/${key.split('C')[0]}/update-data`, update);
    if (remove) router.get(`/${prefix}/${key.split('C')[0]}/remove-data`, remove);
    if (paginate) router.get(`/${prefix}/${key.split('C')[0]}/paginate-data`, paginate);
  });
}

createRoutes(entityControllers, 'entity');

module.exports = router;
