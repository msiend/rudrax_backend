require('module-alias/register');
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const requestLogger = require('@/utils/req_logger');

const app = express();

const port = 3000;
require('dotenv').config({ path: '.env.development' });
require('@/config/dbConfig');

// const x = require('@/controllers/entityControllers/clientController/')

// console.log(x);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(requestLogger);

const appRoutes = require('@/routers/applicationApi')
const authRoutes = require('@/routers/authApi')

app.use('/api', authRoutes)
app.use('/api/v1', appRoutes)

app.listen(port, () => {
  console.log(`server running at port ${port} 🚀`);
});
