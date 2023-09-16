import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import News from './News';
import FDAEventCalendar from './Calendar'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/calendar" element={<FDAEventCalendar />} /> 
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="header">
      <div className="left">
        <img src="/stock-logo.svg" alt="Stock Tracker Logo" />
        <h1>Stock Tracker</h1>
      </div>
      <div className="right">
        <Link to="/news">
          <button>News</button>
        </Link>
        <Link to="/calendar"> 
          <button>Calendar</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
