
import React from 'react';

const Note = ({ note, onDelete }) => {
  return (
    <div>
      <span>{note.text}</span>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
};

export default Note;
