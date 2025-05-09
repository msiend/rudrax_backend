require('module-alias/register');

const express = require('express');
const authRouter = express.Router();
const superAdminControllers = require('@/controllers/authControllers/superadmin');
const superviserControllers = require('@/controllers/authControllers/superviser');
const financeControllers = require('@/controllers/authControllers/finance');
const branchControllers = require('@/controllers/authControllers/branch');

const roleControllerMap = {
   'super-admin': superAdminControllers,
   'superviser': superviserControllers,
   'finance': financeControllers,
   'branch': branchControllers,
};
Object.entries(roleControllerMap).forEach(([role, controller]) => {
   authRouter.post(`/auth/create/${role}`, controller.create);
   authRouter.post(`/auth/login/${role}`, controller.handleLogin);
   authRouter.get(`/auth/refresh/${role}`, controller.handleRefreshToken);
   authRouter.get(`/auth/logout/${role}`, controller.handleLogout);
});

// authRouter.post('/auth/create/super-admin', superAdminControllers.create)

module.exports = authRouter;

