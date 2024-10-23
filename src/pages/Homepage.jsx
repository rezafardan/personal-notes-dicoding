import React, { useState } from "react";
import NoteInput from "./NoteInput/NoteInput";
import NoteList from "./NoteList/NoteList";
import Header from "./Header/Header";
import { getInitialData } from "../utils/index";

const Pages = () => {
  const [initialData, setInitialData] = useState(getInitialData());
  const [archiveData, setArchiveData] = useState([]);
  const [dataSearch, setDataSearch] = useState("");

  const handleSearch = (term) => {
    setDataSearch(term.toLowerCase());
  };

  const filteredNotes = (notes) => {
    if (dataSearch === "") return notes;

    return notes.filter(
      (note) =>
        note.title.toLowerCase().includes(dataSearch) ||
        note.body.toLowerCase().includes(dataSearch)
    );
  };

  const handleAddNote = (newData) => {
    setInitialData([...initialData, newData]);
  };

  const handleDelete = (id) => {
    setInitialData(initialData.filter((data) => data.id !== id));
    setArchiveData(archiveData.filter((data) => data.id !== id));
  };

  const handleArchive = (id) => {
    const filteredData = initialData.find((data) => data.id === id);
    filteredData.archived = true;
    setArchiveData([...archiveData, filteredData]);
    setInitialData(initialData.filter((data) => data.id !== id));
  };

  const handleBack = (id) => {
    const filteredData = archiveData.find((data) => data.id === id);
    setInitialData([...initialData, filteredData]);
    setArchiveData(archiveData.filter((data) => data.id !== id));
    filteredData.archived = false;
  };

  const filteredInitialData = filteredNotes(initialData);
  const filteredArchivedData = filteredNotes(archiveData);

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="note-app__body">
        <NoteInput onAddNote={handleAddNote} />
        <NoteList
          title="Catatan Aktif"
          data={filteredInitialData}
          onDelete={handleDelete}
          onArchive={handleArchive}
        />
        <NoteList
          title="Arsip"
          data={filteredArchivedData}
          onDelete={handleDelete}
          onBack={handleBack}
          isArchive={true}
        />
      </div>
    </>
  );
};

export default Pages;
