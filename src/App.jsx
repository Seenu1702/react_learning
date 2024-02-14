/* eslint-disable react/prop-types */

/*
Hooks:
  - any function that starts with "use" is called Hooks
  - they are special functions that are only available while React is rendering

To create a counter, where the value is increased as a funcion of time or at the click of a button.

*/
import React, { useState } from 'react';

function App() {

  const [counter, setCounter] =  useState(0);

  setTimeout(() => {
    setCounter(counter + 1)
  },1000
  )

  console.log('rendering...',counter)

  return (
    <div className='p-2'>{counter}</div>
  )
}

export default App;