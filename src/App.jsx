import React from 'react';
import Home from './components/Home';
import Notes from './components/Notes';
import Users from './components/Users';
import Note from './components/Note';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App({notes}) {

  const padding = {
    padding: 5,
  }
  return (
    <div>
      <Router>
        <div>
          <Link to="/" style={padding}>Home</Link>
          <Link to="/notes" style={padding}>Notes</Link>
          <Link to="/users" style={padding}>Users</Link>
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notes' element={<Notes notes = { notes }/>} />
          <Route path='/users' element={<Users />} />
          <Route path='/notes/:noteid' element={<Note notes={notes}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;