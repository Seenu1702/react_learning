/* eslint-disable react/prop-types */

/*
Hooks:
  - any function that starts with "use" is called Hooks
  - they are special functions that are only available while React is rendering

To create a counter, where the value is increased as a funcion of time or at the click of a button.

*/
import React, { useState } from 'react';


function Display({counter}){
  return(
    <div className='p-2'>{counter}</div>
  )
}

function Button({text, handleClick}){
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

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
      <Display counter={counter}/>
      <Button text="Plus" handleClick={handlePlusClick}/>
      <Button text="Minus" handleClick={handleMinusClick}/>
      <Button text="Zero" handleClick={handleZeroClick}/>
    </div>
  )
}

export default App;