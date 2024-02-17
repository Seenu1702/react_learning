/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'

function App() {

  const counterRef = useRef(0);

  useEffect(()=> {
    const interval = setInterval(() => {
      counterRef.current += 1;
      console.log('Count:', counterRef.current);
    }, 1000)

    return() => {
      clearInterval(interval);
    };
    
  },[counterRef])

  

  return (
    <div>
      <p>Counter: {counterRef.current}</p>
    </div>
  )
}

export default App;