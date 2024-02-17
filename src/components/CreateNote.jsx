/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

function CreateNote({addNote, setNewNoteContent, setNewNoteImportant, newNoteContent, newNoteImportant, newNoteRef}) {

useEffect(() =>{
  newNoteRef.current.focus();
},[])

  return (
    <div>
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

export default CreateNote;