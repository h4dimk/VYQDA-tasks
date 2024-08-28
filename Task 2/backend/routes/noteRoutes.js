import express from "express";
import {
  getAllNotes,
  addNote,
  deleteNote,
} from "../controllers/noteController.js";

const router = express.Router();

// Route to get all notes
router.get("/get-notes", getAllNotes);

// Route to add a new note
router.post("/add-notes", addNote);

// Route to delete a note by ID
router.delete("/delete-notes/:id", deleteNote);

export default router;
