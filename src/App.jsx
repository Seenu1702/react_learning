/* eslint-disable react/prop-types */
// passing props from child to parent component
import React, { useState } from 'react';

function ChildComponent({onMessage}) {

  const message = 'Hello from Child'
  return(
    <>
    <h2>Child Component</h2>
    <button onClick={() => onMessage(message)}>Send Message to the Parent</button>
    </>
  )
}

function App() {

  const [message, setMessage] = useState('');

  const handleMessage = (data) =>{
    setMessage(data)
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Message from the Child Component: {message}</p>
      <ChildComponent onMessage={handleMessage}/>
    </div>
  )
}

export default App;