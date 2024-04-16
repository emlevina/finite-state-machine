import { NextFunction, Request, Response } from "express";

export function fakeAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(403).json({ message: "Forbidden" });
}
