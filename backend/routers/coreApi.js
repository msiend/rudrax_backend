require('module-alias/register');

const express = require('express');
const coreRouter = express.Router();
const ClientCoreController = require('@/controllers/coreEntityControllers/clientController')
const ExpenseCoreController = require('@/controllers/coreEntityControllers/expenseController')

// [CLIENT]-----------
coreRouter.get('/core/client/get_lastRef',ClientCoreController.getClientsLastRef )


// [EXPENSES]-----------
coreRouter.post('/core/expense/add-expense',ExpenseCoreController.add_Expense_and_dist )

module.exports = coreRouter;
	
