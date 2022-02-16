import { Request, Response } from "express";
import Note from "../entities/Note";

const findAll = async (_req: Request, res: Response) => {
  try {
    const notes = await Note.find();
    return res.json({ notes });
  } catch (err) {
    return res.json({ error: JSON.stringify(err) });
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const requestBody: Note = req.body as Note;

    const note = await Note.create({ body: requestBody.body }).save();
    return res.json({ note });
  } catch (err) {
    return res.json({ error: JSON.stringify(err) });
  }
};

export default { findAll, create };
