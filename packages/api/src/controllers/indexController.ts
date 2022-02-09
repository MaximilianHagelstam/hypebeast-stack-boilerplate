import { Request, Response } from "express";

const healthCheck = (_req: Request, res: Response) => {
  return res.json({ message: "Server running" });
};

export default { healthCheck };
