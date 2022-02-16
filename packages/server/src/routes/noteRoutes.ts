import express from "express";
import noteController from "../controllers/noteController";

const noteRoutes = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
noteRoutes.get("/", noteController.findAll);

export default noteRoutes;
