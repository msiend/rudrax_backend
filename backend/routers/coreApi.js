require('module-alias/register');

const express = require('express');
const coreRouter = express.Router();
const ClientController = require('@/controllers/coreEntityControllers/ClientController')

// authRouter.post('/auth/create/super-admin', authControllers.create)
// authRouter.post('/auth/login/super-admin', authControllers.handleLogin)
// authRouter.get('/auth/refresh/super-admin', authControllers.handleRefreshToken)
// authRouter.get('/auth/logout/super-admin', authControllers.handleLogout)


coreRouter.get('/core/client/get_lastRef',ClientController.getClientsLastRef )


module.exports = coreRouter;
