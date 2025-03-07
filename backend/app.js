require('module-alias/register');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
const corsOptions = require('@/config/corsOptions');
const requestLogger = require('@/utils/req_logger');
const { eventlogger } = require('@/middleware/logEvents');
const credentials = require('@/middleware/credentials');
const jwt_authenticationVerify =require('@/middleware/verifyJWT');

const PORT = process.env.PORT || 3500;
require('dotenv').config({ path: '.env.development' });
require('@/config/dbConfig');




///
////
///// DEV imports =================
const {print} = require('@/_dev/route.reader')
// const testRoute = require('@/routers/test.route.js');
////////////////////////////////





app.use(eventlogger);
app.use(credentials);
// app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
// app.use(requestLogger);


const appRoutes = require('@/routers/applicationApi');
const authRoutes = require('@/routers/authApi');

////// auth routes
app.use('/api', authRoutes);
// app.use(jwt_authenticationVerify)

////// api routes
app.use('/api/v1', appRoutes); 



///
////
///// DEV Executions =================
// app._router.stack.forEach(print.bind(null, [])) 
// app.use(require('express-status-monitor')())
////////////////////////////////


app.listen(PORT, () => {
  console.log(`server running at port ${PORT} 🚀`);
});
