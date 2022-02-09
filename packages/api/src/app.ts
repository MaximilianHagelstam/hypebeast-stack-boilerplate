import cors from "cors";
import express, { Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Server running" });
});

export default app;
