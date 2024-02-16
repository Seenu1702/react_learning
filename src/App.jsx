/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react';
import ChildComponent from './components/ChildComponent';
// to avoid props drilling, we can use useContext() and creatContext()...
// create a context
const MessageContext = createContext();

function App() {
  
  const [message, setMessage] = useState('Hello from App');
  return (
    <div>
      <h1>Parent Component</h1>
      <MessageContext.Provider value={message}>
        <ChildComponent />
      </MessageContext.Provider>
    </div>
  )
}

export {App as default, MessageContext};