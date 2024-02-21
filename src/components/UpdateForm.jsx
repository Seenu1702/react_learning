/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UpdateForm({selectedOption, notes, setNotes}) {

    const [selectedNote, setSelectedNote] = useState(null);
    const [editedContent, setEditedContent] = useState('');
    const [editedImportant, setEditedImportant] = useState('');

    async function fetchNotes(){
        try{
            if(selectedOption !== 'Select an ID'){
                let response = await axios.get(`http://localhost:3000/notes/${selectedOption}`);
                console.log(response.data);
                if(response.data){
                    setSelectedNote(response.data);
                    setEditedContent(response.data.content);
                    setEditedImportant(response.data.important);
                }
            }
        }
        catch(error){
            console.log('Error fetching the data:', error);
        }
    }
    
    useEffect(() => {
        fetchNotes();
    },[selectedOption]);


    const updateNote = (event) => {
        event.preventDefault();

        // preparing the object to update
        let note = {
            id: selectedNote.id,
            content: editedContent,
            important: editedImportant
        }
        axios.put(`http://localhost:3000/notes/${selectedNote.id}`, note)
            .then(response =>{
                console.log(response);
                console.log('updated the data suuccessfully');

                // update the state
                let updateNotes = notes.filter(n => n.id !==
                    note.id);
                updateNotes.concat(note);
                setNotes(updateNotes)
            })
            .catch(error =>{
                console.error('Error updating the data', error);
            })

    }

  return (
    <div>
        <h2>Update Form:</h2>
        {
            !selectedNote ? (
                <p>Loading Data ....</p>
            ) : (
                <form onSubmit={updateNote}>
                    <label>
                        Content: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input 
                            type="text"
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)} />
                    </label>
                    <br /><br />
                    <label>
                        Is Important: &nbsp;&nbsp;
                        <select 
                            value={editedImportant ? 'true' : 'false'}
                            onChange={(e) =>setEditedImportant(e.target.value == 'true' ? true : false)}
                            > 
                            <option>true</option>
                            <option>false</option>
                        </select>
                    </label>
                    <br /><br />
                    <button type='submit'>Update Note</button>
                </form>
            )
        }
    </div>
  )
}

export default UpdateForm;