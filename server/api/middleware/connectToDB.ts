import { VercelRequest, VercelResponse } from "@vercel/node";
import connectDB from "../db/connect";
import { NextFunction } from "express";

const connectToDB = async (req: VercelRequest, res: VercelResponse, next: NextFunction) => {
  try {
    await connectDB(process.env.MONGO_URI!);
    console.log(`Connected to Mongo Cluster`);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred");
  }
};

module.exports = { connectToDB };
