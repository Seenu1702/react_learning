/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router';

function Note({notes}) {

    const id = useParams().noteid;
    // console.log(id);

    // get the note content of that id

    const note = notes.find(n => n.id === Number(id));
  return (
    <div>
        <h2>{note.content}</h2>
    </div>
  )
}

export default Note;