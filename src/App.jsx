// File Path: /src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Team from './components/Team';
import UserGuide from './components/UserGuide';
import Download from './components/Download'; // might delete this
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">About</Link>
        <Link to="/team">Team</Link>

        <Link to="/download">Download</Link>
        <Link to="/user-guide">User Guide</Link>
      </nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/team" element={<Team />} />

        <Route path="/download" element={<Download />} />
        <Route path="/user-guide" element={<UserGuide />} />
      </Routes>
    </Router>
  );
}

export default App;
