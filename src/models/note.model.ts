import { Schema, model, Document } from "mongoose";

export interface Note extends Document {
  title: string;
  content: string;
}

const NoteSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

export default model<Note>("Note", NoteSchema);
