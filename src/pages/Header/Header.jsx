import React from "react";

const Header = ({ onSearch }) => {
  const handleInputChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    onSearch(searchTerm);
  };

  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan ..."
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Header;
