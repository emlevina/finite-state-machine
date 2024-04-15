const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");
const factsRouter = require("./routers/facts");
const bodyParser = require("body-parser");
const path = require("path");
const { connectToDB } = require("./middleware/connectToDB");

dotenv.config();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(connectToDB);
app.use("/api/facts", factsRouter);

module.exports = app;
