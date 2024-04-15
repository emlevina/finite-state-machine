import express from "express";
import { createFact, getFact } from "../controllers/facts.js";

const factsRouter = express.Router();

factsRouter.post("/", createFact);
factsRouter.get("/:number", getFact);

export { factsRouter };
