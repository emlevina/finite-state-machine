import express from "express";
import { createFact, getFact } from "../controllers/facts";
const router = express.Router();

router.post("/", createFact);
router.get("/:number", getFact);

export default router;
