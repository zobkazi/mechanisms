import { Request, Response, NextFunction } from "express";

const dashboard = (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req["userData"];

    res.status(200).json({ userData });
  } catch (error) {
    next(error);
  }
};

export default dashboard;
