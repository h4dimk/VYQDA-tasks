import React from "react";
import { FaTrash } from "react-icons/fa";

const NoteItem = ({ note, onDelete }) => {
  return (
    <div
      key={note.id}
      className="relative bg-amber-100 p-4 rounded-lg shadow-md flex flex-col justify-between"
    >
      <div className="flex-grow overflow-auto max-h-40">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {note.title}
        </h3>
        <p className="text-gray-700 mb-2">{note.content}</p>
        <p className="text-gray-500 text-sm">
          {new Date(note.created_at).toLocaleString()}
        </p>
      </div>
      <div className="mt-5">
        <button
          onClick={() => onDelete(note.id)}
          className="absolute bottom-2 right-2 p-2 rounded-full transition"
        >
          <FaTrash className="w-5 h-5 text-black hover:text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
