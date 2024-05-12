import { Request, Response, NextFunction } from "express";

const dashboard = (req: Request, res: Response, next: NextFunction) => {
  res.send("Dashboard");
};

export default dashboard;
