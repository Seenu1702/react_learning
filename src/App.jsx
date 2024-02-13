/* eslint-disable react/prop-types */
import React from 'react'

function Hello(props){
  return(
    <div>
      <p>Hello {props.name}!</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <Hello name="Seenu"/>
    </div>
  )
}

export default App;