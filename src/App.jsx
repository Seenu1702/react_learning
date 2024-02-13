/* eslint-disable react/prop-types */
import React from 'react'
import Note from './components/Note';


function App(props) {
  const {notes} = props;
  const optionList = [];
  notes.forEach(note => {
    optionList.push(<Note key={note.id} note = { note} />)
    
  });

  function addNote(){
    console.log('button clicked');

  }
  
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        { optionList }
      </ul>
      <form>
        <input type="text" name='note' />
        <button onClick={() => addNote()}>Save Note</button>
      </form>
    </div>
  )
}

export default App