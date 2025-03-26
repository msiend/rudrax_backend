require('module-alias/register');

const express = require('express');
const coreRouter = express.Router();
const ClientController = require('@/controllers/coreEntityControllers/clientController')

// [CLIENT]-----------
coreRouter.get('/core/client/get_lastRef',ClientController.getClientsLastRef )


// [EXPENSES]-----------
coreRouter.get('/core/expense/add-expense',ClientController.getClientsLastRef )

module.exports = coreRouter;
	
