import { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import cors from "cors";
import factsRouter from "./routers/facts";
import connectDB from "./db/connect";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: function (origin, callback) {
      console.log("Origin: ", origin);
      if (origin === process.env.CLIENT_URL) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/facts", factsRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI!);
    console.log(`Connected to Mongo Cluster`);
  } catch (error) {
    console.log(error);
  }
};

start();

export default (req: VercelRequest, res: VercelResponse) => {
  return app(req, res);
};
