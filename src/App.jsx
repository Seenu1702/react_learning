/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ReadNotes from './components/ReadNotes';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import DeleteNote from './components/DeleteNote';


// to install json server
// npm install -g json-server

// to start the server
// npx -v
// npx json-server --port 3000 --watch db.json

function App() {

  const [notes, setNotes] = useState([]);
  const [showStatus, setShowStatus] = useState('all')

  // state for adding new note...
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('');

  async function fetchNotes(){
    try{
      const response = await axios.get('http://localhost:3000/notes/');
    setNotes(response.data);
    }
    catch(error){
      console.log('Failed to fetch notes:', error)
    }
  }

  useEffect(() => {
    fetchNotes();
  }, []);

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

    // setNotes(notes.concat(noteObject));
    axios
  .post('http://localhost:3000/notes', noteObject)
  .then(response => {
    console.log('new note added successfully..')
  })

    fetchNotes();
    // clear the inpuuts
    setNewNoteContent('');
    setNewNoteImportant('');
}



const newNoteRef = useRef(null);


  const handleStatusChange = (event) => {
    // console.log(event.target.value);
    setShowStatus(event.target.value);
    
  }
  
  const padding = {
    paddingRight : 15,
  }

  return (
    <Router>

      <div>
        <Link to='/' style={padding}>Dashboard</Link>
        <Link to='/read' style={padding}>Read Notes</Link>
        <Link to='/create-note' style={padding}>Create Notes</Link>
        <Link to='/edit-note' style={padding}>Edit Notes</Link>
        <Link to='/delete-note' style={padding}>Delete Notes</Link>
      </div>

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/read' element={<ReadNotes handleStatusChange = {handleStatusChange} showStatus = {showStatus} notes = {notes} />} />
        <Route path='/create-note' element={<CreateNote addNote={addNote} setNewNoteContent = {setNewNoteContent} setNewNoteImportant = {setNewNoteImportant}newNoteContent = {newNoteContent} newNoteImportant = {newNoteImportant} newNoteRef = {newNoteRef} />} />
        <Route path='/edit-note' element={<EditNote notes={notes} setNotes={setNotes}/>} />
        <Route path='/delete-note' element={<DeleteNote notes={notes} setNotes={setNotes}/>} />
      </Routes>

    </Router>
    
  )
}

export default App;