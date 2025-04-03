require('module-alias/register');

const express = require('express');
const coreRouter = express.Router();
const ClientCoreController = require('@/controllers/coreEntityControllers/clientController')
const VendorCoreController = require('@/controllers/coreEntityControllers/vendorController')
const ExpenseCoreController = require('@/controllers/coreEntityControllers/expenseController')

// [CLIENT]-----------
coreRouter.get('/core/client/get_lastRef',ClientCoreController.getClientsLastRef )
coreRouter.get('/core/client/get_clientProject',ClientCoreController.getClientProjects )
coreRouter.get('/core/client/get_ProjectInfo',ClientCoreController.getProject_Col_Exp )

// [VENDOR]-----------
coreRouter.get('/core/vendor/get_lastRef',VendorCoreController.getVendorLastRef )
coreRouter.get('/core/vendor/get_vendor_payment_purchase',VendorCoreController.getVendor_Purch_Payment )


// [EXPENSES]-----------
coreRouter.post('/core/expense/add-expense',ExpenseCoreController.add_Expense_and_dist )
coreRouter.get('/core/expense/get_expense_details/:exp_id',ExpenseCoreController.getExpenseDetails )

module.exports = coreRouter;
	
