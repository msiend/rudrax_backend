require('module-alias/register');

const express = require('express');
const authRouter = express.Router();
const authControllers = require('@/controllers/authControllers/superadmin')

authRouter.post('/auth/create/super-admin', authControllers.create)
authRouter.post('/auth/login/super-admin', authControllers.handleLogin)
authRouter.get('/auth/refresh/super-admin', authControllers.handleRefreshToken)
authRouter.get('/auth/logout/super-admin', authControllers.handleLogout)


module.exports = authRouter;
