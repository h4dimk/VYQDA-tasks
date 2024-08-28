import db from "../config/db.js";

// Function to get all notes
export const getAllNotes = (req, res) => {
  db.query("SELECT * FROM notes ORDER BY created_at DESC", (err, results) => {
    if (err) {
      console.error("Error fetching notes: ", err);
      res.status(500).json({ error: "Failed to fetch notes" });
      return;
    }
    res.status(200).json(results);
  });
};

// Function to add a new note
export const addNote = (req, res) => {
  const { title, content } = req.body;
  const createdAt = new Date();

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  db.query(
    "INSERT INTO notes (title, content, created_at) VALUES (?, ?, ?)",
    [title, content, createdAt],
    (err, results) => {
      if (err) {
        console.error("Error adding note:", err);
        res.status(500).json({ error: "Failed to add note" });
        return;
      }
      res.status(201).json({ message: "Note added successfully" });
    }
  );
};

// Function to delete a note by ID
export const deleteNote = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "Note ID is required" });
  }

  db.query("DELETE FROM notes WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error("Error deleting note:", err);
      res.status(500).json({ error: "Failed to delete note" });
      return;
    }
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Note deleted successfully" });
    } else {
      res.status(404).json({ error: "Note not found" });
    }
  });
};
