import { Request, Response } from "express";
import Fact from "../models/Fact.js";

export const createFact = async (req: Request, res: Response) => {
  try {
    const fact = await Fact.create(req.body);
    res.status(201).json({ fact });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

export const getFact = async (req: Request, res: Response) => {
  try {
    const fact = await Fact.findOne({ number: req.params.number });
    if (fact) {
      return res.status(200).json({ fact: fact.fact });
    } else {
      return res.status(404).json({ error: "Fact not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
