/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ReactDOM } from 'react-dom/client';
import Home from './components/Home';
import Notes from './components/Notes';
import Users from './components/Users';

function App() {

  const [page, setPage] = useState('home');

  const toPage = (page) =>(event) => {
    event.preventDefault();
    setPage(page);
  }
  const content = () => {
    if(page === 'home'){
      return(
        <Home />
      )
    } 
    else if(page === 'notes'){
      return(
        <Notes />
      )
    }
    else if(page === 'users'){
      return(
        <Users />
      )
    }
  }

  const padding = {
    padding: 5,
  }
  return (
    <div>
      <a href="" onClick={toPage('home')} style={padding}>Home</a>
      <a href="" onClick={toPage('notes')} style={padding}>Notes</a>
      <a href="" onClick={toPage('users')} style={padding}>Users</a>

      {content()}
    </div>

  
  )
}

export default App;