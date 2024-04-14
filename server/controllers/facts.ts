import { Request, Response } from "express";
import Fact from "../models/Fact";

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
    const factToSend = fact ? fact.fact : "Fact not found";
    res.status(201).json({ fact: factToSend });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
