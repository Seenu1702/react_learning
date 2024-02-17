/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App(props) {

  const [notes, setNotes] = useState([]);
  const [showStatus, setShowStatus] = useState('all')

  // state for adding new note...
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('');

  const addNote = (event) => {
    event.preventDefault();
// console.log(newNoteContent, newNoteImportant);

    // create a new note object
    let noteObject = {
      id: notes.length + 1,
      content: newNoteContent,
      important: newNoteImportant === 'True',
    }

    // console.log(noteObject);

    setNotes(notes.concat(noteObject));

    // clear the inpuuts
    setNewNoteContent('');
    setNewNoteImportant('');
}



const newNoteRef = useRef(null);

useEffect(() =>{
  newNoteRef.current.focus();
},[])

  // get the data
  useEffect(()=>{
    // run for the first time and only once
    setNotes(props.notes);
  }, []);

  // console.log(notes);

  let filterdNotes = (notes, showStatus) => {
    switch(showStatus){
      case 'all':
        return notes;
      case 'imp':
        return notes.filter(note => note.important === true);
      case 'nonimp':
        return notes.filter(note => note.important === false);
    }
  }

  let notesFiltered = filterdNotes(notes, showStatus);

  const handleStatusChange = (event) => {
    // console.log(event.target.value);
    setShowStatus(event.target.value);
    
  }
  
  return (
    <div>
      <h2>Notes</h2>
      <label className='label'>
        <input 
          type="radio" 
          name='filter'
          value='all'  
          checked= {showStatus === 'all'}
          onChange={handleStatusChange}/> All Notes
      </label>
      <label className='label'>
        <input 
          type="radio"
          name='filter'
          value='imp'
          checked= {showStatus === 'imp'}
          onChange={handleStatusChange} /> Important Notes
      </label>
      <label className='label'>
        <input 
          type="radio"
          name='filter'
          value='nonimp'
          checked= {showStatus === 'nonimp'}
          onChange={handleStatusChange} /> Non Important Notes
      </label>
      <ul>
        {
          notesFiltered.map(note => 
            <li key={note.id}>{note.content}</li>
            )
        }
      </ul>

      <hr />
      <h2>Add a New Note</h2>
      <form onSubmit={addNote}>
      <label>
        Content : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text"
          placeholder='type a new note...'
          onChange={(e) => setNewNoteContent(e.target.value)}
          value={newNoteContent}
          ref={newNoteRef}
          required
         />
      </label>
      <br /><br />
      <label>
        Is Important : &nbsp;&nbsp;
        <select
          onChange={(e) => setNewNoteImportant(e.target.value)}
          value={newNoteImportant}
          required
          >
          <option>---Select---</option>
          <option>True</option>
          <option>False</option>
        </select>
      </label>
      <br /><br />
      <button type='submit'>Add New Note</button>
      </form>
    </div>
    
  )
}

export default App;