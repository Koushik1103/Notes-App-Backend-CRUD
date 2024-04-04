import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import noteRoutes from "./routes/note.routes";
import dotenv from 'dotenv';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", noteRoutes);

dotenv.config();

const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_DB_URI as string)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error("Error connecting to MongoDB:", error));
