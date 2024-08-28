import React, { useState, useRef, useEffect } from "react";

const NoteForm = ({ onSubmit }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, content);
    setTitle("");
    setContent("");
    setIsExpanded(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="p-4 mb-8 w-5/12 mx-auto">
      <div
        ref={formRef}
        className={`transition-all duration-300 ease-in-out overflow-hidden border border-amber-50 rounded-lg shadow-md bg-amber-100`}
        style={{ maxHeight: isExpanded ? "500px" : "64px" }}
      >
        {!isExpanded ? (
          <div
            className="flex h-full cursor-pointer p-4"
            onClick={() => setIsExpanded(true)}
          >
            <span className="text-gray-500 text-lg">Take a note...</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-6 bg-amber-100 rounded-lg shadow-md space-y-6"
          >
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
              />
            </div>

            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                rows="5"
                required
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
              >
                Add Note
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default NoteForm;
