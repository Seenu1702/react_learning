/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './App.css';

function App(props) {

  const [notes, setNotes] = useState([]);
  const [showStatus, setShowStatus] = useState('all')


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
    </div>
    
  )
}

export default App;