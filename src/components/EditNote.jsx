/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import UpdateForm from './UpdateForm';

function EditNote({notes, setNotes}) {
    // console.log(notes);

    const [selectedOption, setSelectedOption] = useState('Select an ID')

    const selectHandler = (event) =>{
        // console.log(event.target.value);
        setSelectedOption(event.target.value);
    }


  return (
    <div>
        <h2>EditNote</h2>
        <label>
            Select the Note ID to Edit/Update: &nbsp;
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
            {selectedOption !== 'Select an ID' && <UpdateForm selectedOption = {selectedOption} notes={notes} setNotes={setNotes} />}
        </div>

    </div>
  )
}

export default EditNote;