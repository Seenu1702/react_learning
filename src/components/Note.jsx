/* eslint-disable react/prop-types */
function Note (props){

    const note = props.note;
    // conditional rendering
    
    return(
      <li>{ note.content } { note.important && '✔' }</li>
    )
}

export default Note;