import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
