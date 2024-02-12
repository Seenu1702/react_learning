/* eslint-disable react/prop-types */
function Note (props){

    const note = props.note;
    return(
      <li>{note.content}</li>
    )
}

export default Note;