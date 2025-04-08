require('module-alias/register');

const express = require('express');
const coreRouter = express.Router();
const ClientCoreController = require('@/controllers/coreEntityControllers/clientController')
const VendorCoreController = require('@/controllers/coreEntityControllers/vendorController')
const ExpenseCoreController = require('@/controllers/coreEntityControllers/expenseController')
const MaterialCoreController = require('@/controllers/coreEntityControllers/material_reqController')
const UsersCoreController = require('@/controllers/coreEntityControllers/usersController')

// [CLIENT]-----------
coreRouter.get('/core/client/get_lastRef',ClientCoreController.getClientsLastRef )
coreRouter.get('/core/client/get_clientProject',ClientCoreController.getClientProjects )
coreRouter.get('/core/client/get_ProjectInfo',ClientCoreController.getProject_Col_Exp )

// [VENDOR]-----------
coreRouter.get('/core/vendor/get_lastRef',VendorCoreController.getVendorLastRef )
coreRouter.get('/core/vendor/get_vendor_payment_purchase',VendorCoreController.getVendor_Purch_Payment )


// [EXPENSES]-----------
coreRouter.post('/core/expense/create',ExpenseCoreController.add_Expense_and_dist )
coreRouter.get('/core/expense/get_expense_details/:exp_id',ExpenseCoreController.getExpenseDetails )

// [PROJECTS]-----------
coreRouter.post('/core/project',ExpenseCoreController.add_Expense_and_dist )

// [Material]-----------
coreRouter.post('/core/material_req/create', MaterialCoreController.insertMaterialRequestWithItems )

// [Material]-----------
coreRouter.post('/core/users/create', UsersCoreController.create)
coreRouter.post('/core/users/create', UsersCoreController.findAll)
coreRouter.post('/core/users/create', UsersCoreController.findOne)
coreRouter.post('/core/users/create', UsersCoreController.update)
coreRouter.post('/core/users/create', UsersCoreController.updatePassword)
coreRouter.post('/core/users/create', UsersCoreController.toggleStatus)
coreRouter.post('/core/users/create', UsersCoreController.remove)

module.exports = coreRouter;
	
