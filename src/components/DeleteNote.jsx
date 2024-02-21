/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DeleteForm({notes, setNotes, selectedOption}){

    let selectedNote = notes.find(note => note.id === selectedOption);
    console.log(selectedNote);
    const navigate = useNavigate();


    async function deleteNote(){
        try {
            let response = await axios.delete(`http://localhost:3000/notes/${selectedOption}`);

            console.log('note deleted successfully');
            let updateNotes = notes.filter(n => n.id !==
                selectedNote.id);
            setNotes(updateNotes)
            navigate('/read');
        } catch (error) {
            console.error('Error deleting the note', error);
        }
    }
    return(
        <div>
            <br />
            <label>
                <b>ID :</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;{selectedNote.id} <br />
                <b>Content :</b> &nbsp;&nbsp;&nbsp; {selectedNote.content} <br />
                <b>Important :</b> {selectedNote.important ? 'true' : 'false'}
                <br />
                <button onClick={deleteNote}>Delete Note</button>
            </label>
            
        </div>
    )
}

function DeleteNote({notes, setNotes}) {

    const [selectedOption, setSelectedOption] = useState('Select an ID')

    const selectHandler = (event) =>{
        // console.log(event.target.value);
        setSelectedOption(event.target.value);
    }

    return (
        <div>
            <h2>Delete Note</h2>
            <label>
                Select the Note ID to Delete: &nbsp;
                <select 
                    onChange={selectHandler}
                    value={selectedOption}>
                        <option disabled>Select an ID</option>
                    {
                        notes.map(note => {
                            return <option key={note.id}>{note.id}</option>
                        })
                    }
                </select>
            </label>

            <div>
            {selectedOption !== 'Select an ID' && 
                <DeleteForm notes={notes} setNotes = {setNotes} selectedOption= {selectedOption} /> }
            </div>  
    </div>
  )
}

export default DeleteNote;