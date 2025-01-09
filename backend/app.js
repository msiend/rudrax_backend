require('module-alias/register');
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
const corsOptions = require('@/config/corsOptions');
const requestLogger = require('@/utils/req_logger');
const { eventlogger } = require('./middleware/logEvents');
const credentials = require('./middleware/credentials');




const app = express();

const PORT = process.env.PORT || 3500;
require('dotenv').config({ path: '.env.development' });
require('@/config/dbConfig');

// const x = require('@/controllers/entityControllers/clientController/')

app.use(eventlogger);
app.use(credentials);
app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
// app.use(requestLogger);

const appRoutes = require('@/routers/applicationApi')
const authRoutes = require('@/routers/authApi')

app.use('/api', authRoutes)
app.use('/api/v1', appRoutes)







app.listen(PORT, () => {
  console.log(`server running at port ${PORT} 🚀`);
});
