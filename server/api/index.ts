import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { factsRouter } from "./routers/facts.js";
import { connectToDB } from "./middleware/connectToDB.js";

dotenv.config();

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(connectToDB);
app.use("/api/facts", factsRouter);

export default app;
