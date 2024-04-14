const http = require("http");
const cors = require("cors");
const express = require("express");
const factsRouter = require("./routers/facts");
const connectDB = require("./db/connect");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/facts", factsRouter);

const server = http.createServer(app);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log(`Connected to Mongo Cluster`);
    server.listen(port, () => {
      console.log(`Server runs on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
