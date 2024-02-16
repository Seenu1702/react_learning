import React, { useContext } from 'react';
import { childMessageContext } from './ChildComponent';

function GrandChildComponent() {
    const message = useContext(childMessageContext);
  return (
    <div>
        <h2>GrandChildComponent</h2>
        <p>Message from Parent Component: <b>{message}</b></p>
    </div>
  )
}

export default GrandChildComponent;