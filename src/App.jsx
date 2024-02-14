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

  const handlePlusClick = () => {
    setCounter(counter + 1);
  }

  const handleZeroClick = () => {
    setCounter(0);
  }

  const handleMinusClick = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
  }

  console.log('rendering..', counter);

  return (
    <div>
      <div className='p-2'>{counter}</div>
      <button onClick={handlePlusClick}>Plus</button>
      <button onClick={handleZeroClick}>Zero</button>
      <button onClick={handleMinusClick}>Minus</button>
    </div>
  )
}

export default App;