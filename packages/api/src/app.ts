import { add } from "@walnut/common";
import cors from "cors";
import express, { Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import logger from "./config/logger";

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());

logger.info(add(1, 1));

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Server running" });
});

export default app;
