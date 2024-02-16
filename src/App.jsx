/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Note from './components/Note';

function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('');

  // console.log(notes);

  const addNote = (event) => {
    event.preventDefault();
    // console.log('button clicked');
    console.log(newNote);

    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,
    }

    setNotes(notes.concat(noteObject)); 
    setNewNote('');
    
  }

  const handleNoteChange = (event) => {
    // console.log(event.target.value);
    setNewNote(event.target.value);
  }

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {
          notes.map(note => 
            <Note key={note.id} note={note}/>)
        }
      </ul>
      
        <form onSubmit={addNote}>
          <input 
            value={newNote}
            placeholder='add a new note...'
            onChange={handleNoteChange}
            
          />
          <button type='submit'>Save Note</button>
        </form>
      </div>
    
  )
}

export default App;