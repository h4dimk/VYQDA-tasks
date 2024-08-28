import express from "express";
import cors from "cors";
import noteRoutes from "./routes/noteRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const corsOptions = {
  origin: process.env.CLIENT,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/notes", noteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
