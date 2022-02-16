import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "yup";
import { AnyObject } from "yup/lib/object";

const validateRequest =
  (schema: ObjectSchema<AnyObject>) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedBody = await schema.validate(req.body);
      req.body = validatedBody;
      next();
    } catch (err) {
      res.status(400).json({ error: JSON.stringify(err) });
    }
  };

export default validateRequest;
