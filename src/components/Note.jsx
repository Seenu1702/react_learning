/* eslint-disable react/prop-types */
function Note (props){

    const note = props.note;
    return(
      <option>{note.content}</option>
    )
}

export default Note;