import * as yup from "yup";

export const createNoteSchema = yup.object().shape({
  body: yup.string().min(5).max(50).required(),
});
