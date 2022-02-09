import { add } from "@walnut/common";
import { Request, Response } from "express";
import logger from "../config/logger";

const healthCheck = (_req: Request, res: Response) => {
  logger.debug(add(1, 1));
  return res.json({ message: "Server running" });
};

export default { healthCheck };
