import React, { useState, useEffect } from "react";
import axios from "./services/axiosService.js";
import Navbar from "./components/Navbar.jsx";
import NoteForm from "./components/NoteForm.jsx";
import NoteList from "./components/NoteList.jsx";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("/get-notes");
        setNotes(response.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, []);

  const handleAddNote = async (title, content) => {
    try {
      const newNote = { title, content, created_at: new Date().toISOString() };
      await axios.post("/add-notes", newNote);
      setNotes((prevNotes) => [...prevNotes, newNote]);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await axios.delete(`/delete-notes/${id}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div className="min-h-screen bg-teal-700">
      <Navbar />
      <div className="p-5 mx-auto">
        <NoteForm onSubmit={handleAddNote} />
        <NoteList notes={notes} onDelete={handleDeleteNote} />
      </div>
    </div>
  );
}

export default App;
