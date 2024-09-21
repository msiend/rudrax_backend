require("module-alias/register");
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const port = 3000;
require("dotenv").config({ path: ".env.development" });
require("@/config/dbConfig");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

// const appRoutes = require('@/routers/applicationApi')

// app.use('/api', appRoutes)

app.listen(port, () => {
  console.log(`server running at port ${port} 🚀`);
});
