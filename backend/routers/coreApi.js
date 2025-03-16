require('module-alias/register');

const express = require('express');
const coreRouter = express.Router();
const ClientController = require('@/controllers/coreEntityControllers/ClientController')

// [CLIENT]-----------
coreRouter.get('/core/client/get_lastRef',ClientController.getClientsLastRef )



module.exports = coreRouter;
