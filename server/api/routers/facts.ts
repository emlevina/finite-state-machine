import express from "express";
import { createFact, getFact } from "../controllers/facts.js";
import { fakeAuthenticate } from "../middleware/fakeAuthenticate.js";

const factsRouter = express.Router();

factsRouter.post("/", fakeAuthenticate, createFact);
factsRouter.get("/:number", getFact);

export { factsRouter };
