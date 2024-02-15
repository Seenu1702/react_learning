import React from 'react';
import Home from './components/Home';
import Notes from './components/Notes';
import Users from './components/Users';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {

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
          <Route path='/notes' element={<Notes />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;