require('module-alias/register');

const express = require('express');
const coreRouter = express.Router();
const ClientCoreController = require('@/controllers/coreEntityControllers/clientController')
const ExpenseCoreController = require('@/controllers/coreEntityControllers/expenseController')

// [CLIENT]-----------
coreRouter.get('/core/client/get_lastRef',ClientCoreController.getClientsLastRef )
coreRouter.get('/core/client/get_clientProject',ClientCoreController.getClientProjects )
coreRouter.get('/core/client/get_ProjectInfo',ClientCoreController.getProject_Col_Exp )


// [EXPENSES]-----------
coreRouter.post('/core/expense/create',ExpenseCoreController.add_Expense_and_dist )

module.exports = coreRouter;
	
