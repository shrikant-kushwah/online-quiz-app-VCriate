const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());


module.exports = app;
