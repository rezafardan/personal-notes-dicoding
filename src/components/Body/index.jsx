import React, { useState } from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import { getInitialData } from "../../utils/index";

const Body = () => {
  const [initialData, setInitialData] = useState(getInitialData());
  const [archiveData, setArchiveData] = useState([]);

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

  return (
    <div className="note-app__body">
      <NoteInput onAddNote={handleAddNote} />
      <NoteList
        title="Catatan Aktif"
        data={initialData}
        onDelete={handleDelete}
        onArchive={handleArchive}
      />
      <NoteList
        title="Arsip"
        data={archiveData}
        onDelete={handleDelete}
        isArchive={true}
      />
    </div>
  );
};

export default Body;
