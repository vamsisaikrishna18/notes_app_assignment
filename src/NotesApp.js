import React, { useState } from 'react';
import './NotesApp.css';
import { auth } from './firebase';

function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', description: '', image: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddNote = () => {
    if (newNote.title.trim() !== '' && newNote.description.trim() !== '') {
      if (editIndex !== null) {
        const updatedNotes = [...notes];
        updatedNotes[editIndex] = newNote;
        setNotes(updatedNotes);
        setEditIndex(null);
      } else {
        setNotes([...notes, newNote]);
      }
      setNewNote({ title: '', description: '', image: '' });
    }
  };

  const handleNoteChange = (e) => {
    const { name, value } = e.target;
    setNewNote({
      ...newNote,
      [name]: value,
    });
  };

  const handleEditNote = (index) => {
    setNewNote(notes[index]);
    setEditIndex(index);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h1 className='title'>Notes App</h1>
      <button onClick={()=>auth.signOut()} className='signout-btn'>SignOut</button>
      <div className='notes-container'>
        <input
          type="text"
          name="title"
          value={newNote.title}
          onChange={handleNoteChange}
          placeholder="Enter title"
        />
        <textarea
          name="description"
          value={newNote.description}
          onChange={handleNoteChange}
          placeholder="Enter description"
        />
        <input
          type="text"
          name="image"
          value={newNote.image}
          onChange={handleNoteChange}
          placeholder="Enter image URL"
        />
        <button onClick={handleAddNote} className='button'>{editIndex !== null ? 'Update Note' : 'Add Note'}</button>
      </div>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search notes..."
        />
      </div>
      <ul>
        {filteredNotes.map((note, index) => (
          <li key={index}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            {note.image && <img src={note.image} alt="Note" />}
            <div>
              <button onClick={() => handleEditNote(index)} className='btn-2'>Edit</button>
              <button onClick={() => handleDeleteNote(index)} className='btn'>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesApp;
