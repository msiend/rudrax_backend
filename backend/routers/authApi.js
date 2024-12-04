require('module-alias/register');

const express = require('express');
const authRouter = express.Router();
const authControllers = require('@/controllers/authControllers/superadmin')

authRouter.post('/auth/create', authControllers.create)


module.exports = authRouter;
