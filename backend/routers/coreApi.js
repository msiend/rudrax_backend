require('module-alias/register');

const express = require('express');
const coreRouter = express.Router();
const ClientCoreController = require('@/controllers/coreEntityControllers/clientController');
const ProjectCoreController = require('@/controllers/coreEntityControllers/projectController');
const VendorCoreController = require('@/controllers/coreEntityControllers/vendorController');
const ExpenseCoreController = require('@/controllers/coreEntityControllers/expenseController');
const UsersCoreController = require('@/controllers/coreEntityControllers/usersController');
const contractorPaymentCoreController = require('@/controllers/coreEntityControllers/contractorPaymentController');
const projectPhaseCoreController = require('@/controllers/coreEntityControllers/project_phaseController');
const Project_task_empController = require('@/controllers/coreEntityControllers/project_task_empController');
const AnalyticsCoreController = require('@/controllers/coreEntityControllers/analyticsController');

// [CLIENT]-----------
coreRouter.get('/core/client/get_lastRef', ClientCoreController.getClientsLastRef);
coreRouter.get('/core/client/get_clientProject', ClientCoreController.getClientProjects);
coreRouter.get('/core/client/get_ProjectInfo', ClientCoreController.getProject_Col_Exp);

// [VENDOR]-----------
coreRouter.get('/core/vendor/get_lastRef', VendorCoreController.getVendorLastRef);
coreRouter.get('/core/vendor/get_vendor_payment_purchase', VendorCoreController.getVendor_Purch_Payment);

// [EXPENSES]-----------
coreRouter.get('/core/expense/get_expense/:exp_id', ExpenseCoreController.findWithAllDate);

// [PROJECTS]-----------
coreRouter.get('/core/project/get_project_detail/:pro_id', ProjectCoreController.getFullProject_OtherDetails_);

// [PROJECTS TASK EMP]-----------
coreRouter.post('/core/project_task_emp/update-status', Project_task_empController.updateStatus);
coreRouter.post('/core/project_task_emp/getAllByProject', Project_task_empController.getAllByProjectId);
coreRouter.post('/core/project_task_emp/getAllByPhase', Project_task_empController.getAllByPhaseId);
coreRouter.post('/core/project_task_emp/getAllByPhaseTask', Project_task_empController.getAllByPhaseTaskId);
coreRouter.post('/core/project_task_emp/getAllByUser', Project_task_empController.getAllByUserId);

// [User]-----------
coreRouter.post('/core/users/create/:role', UsersCoreController.create);
coreRouter.get('/core/users/readAll/:role', UsersCoreController.findAll);
coreRouter.get('/core/users/readOne/:role/:id', UsersCoreController.findOne);
coreRouter.put('/core/users/update/:role/:id', UsersCoreController.update);
coreRouter.put('/core/users/updatePassword/:role/:id', UsersCoreController.updatePassword);
coreRouter.put('/core/users/toggleStatus/:role/:id', UsersCoreController.toggleStatus);
coreRouter.delete('/core/users/delete/:role/:id', UsersCoreController.remove);

// [Contaractor payments]-----------
coreRouter.get('/core/contractorPayment/readAll', contractorPaymentCoreController.findAllByID);

// [Project phase]-----------
coreRouter.post('/core/project_phase/update_status', projectPhaseCoreController.updatePhaseStatus);

// [Analytics  phase]-----------
// coreRouter.post('/core/project_phase/update_status', analyticsCoreController.updatePhaseStatus);
coreRouter.get('/core/dashboard/overview', AnalyticsCoreController.getDashboard_Overview);
coreRouter.get('/core/dashboard/projects-overview', AnalyticsCoreController.getProjectsOverview);
coreRouter.get('/core/dashboard/financial-overview', AnalyticsCoreController.getFinancialOverview);
coreRouter.get('/core/dashboard/recent-activities', AnalyticsCoreController.getRecentActivities);

module.exports = coreRouter;
