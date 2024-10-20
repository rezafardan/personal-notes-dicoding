import React from "react";

const NoteList = ({ title, data, onDelete, onArchive, isArchive }) => {
  return (
    <>
      <h2>{title}</h2>
      <div className="notes-list">
        {data.length > 0 ? (
          <>
            {data.map((data) => (
              <div className="note-item" key={data.id}>
                <div className="note-item__content">
                  <h3 className="note-item__title">{data.title}</h3>
                  <p className="note-item__date">{data.createdAt}</p>
                  <p className="note-item__body">{data.body}</p>
                </div>
                <div className="note-item__action">
                  <button
                    className="note-item__delete-button"
                    onClick={() => onDelete(data.id)}
                  >
                    Delete
                  </button>
                  {!isArchive && (
                    <button
                      className="note-item__archive-button"
                      onClick={() => onArchive(data.id)}
                    >
                      Arsipkan
                    </button>
                  )}
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <p>Tidak Ada Catatan</p>
          </>
        )}
      </div>
    </>
  );
};

export default NoteList;
