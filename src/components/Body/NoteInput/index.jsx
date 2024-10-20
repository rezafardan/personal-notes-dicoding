import React, { useState } from "react";
import { showFormattedDate } from "../../../utils/index";

const NoteInput = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const initialData = {
    id: new Date().getTime(),
    title,
    body,
    createdAt: showFormattedDate(new Date()),
    archived: false,
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    onAddNote(initialData);
    setTitle(title);
    setBody(body);
  };

  const handleCount = () => {
    const maxString = 50;
    const totalCount = maxString - title.length;
    if (totalCount <= 0) {
      alert("To many character");
    }
    return totalCount;
  };

  return (
    <div className="note-input">
      <h2>Buat catatan</h2>
      <form onSubmit={handleSubmitForm}>
        <p className="note-input__title__char-limit">
          Sisa Karakter : {handleCount()}
        </p>
        <input
          type="text"
          className="note-input__title"
          placeholder="Ini adalah judul ..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <textarea
          type="text"
          className="note-input__body"
          placeholder="Tuliskan catatanmu di sini ..."
          onChange={(e) => setBody(e.target.value)}
          value={body}
          required
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
};

export default NoteInput;
