import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import indexRoutes from "./routes/indexRoutes";

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());

app.use("/", indexRoutes);

export default app;
