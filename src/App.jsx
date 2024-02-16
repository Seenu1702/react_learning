// useRef - hook: to create a mutable reference to an element of a value that persists across render cycles.

// Example: focus an input text element on click of a button


import React, { useRef } from 'react';

function App() {

  const inputRef = useRef(null);

  const buttonhandler = () => {
    inputRef.current.focus();
  }
  return (
    <div>
      <input 
      type="text"
      ref={inputRef} />

      <button onClick={buttonhandler}>Focus Input</button>
    </div>
  )
}

export default App;