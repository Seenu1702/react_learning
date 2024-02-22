/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const counter = useSelector(state => state);
  return (
    <div>
      <div>
        {counter}
      </div>
      <div>
        <button onClick={(e) => dispatch({type: 'INCR'})}>INCREMENT</button>
        <button onClick={(e) => dispatch({type: 'DECR'})}>DECREMENT</button>
        <button onClick={(e) => dispatch({type: 'ZERO'})}>RESET</button>
      </div>
    </div>
  )
}

export default App;