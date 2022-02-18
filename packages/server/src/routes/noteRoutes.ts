/* eslint-disable @typescript-eslint/no-misused-promises */
import { createNoteSchema } from "@hypebeast/common";
import express from "express";
import noteController from "../controllers/noteController";
import validateRequest from "../middleware/validateRequest";

const noteRoutes = express.Router();

noteRoutes.get("/", noteController.findAll);
noteRoutes.post("/", validateRequest(createNoteSchema), noteController.create);

export default noteRoutes;
