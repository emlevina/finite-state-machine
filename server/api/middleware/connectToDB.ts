import { NextFunction, Response, Request } from "express";
import connectDB from "../db/connect.js";

export const connectToDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await connectDB(process.env.MONGO_URI!);
    console.log(`Connected to Mongo Cluster`);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred");
  }
};
