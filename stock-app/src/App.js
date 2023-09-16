import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import News from './News';
import FDAEventCalendar from './Calendar'; // Import the Calendar component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/calendar" element={<FDAEventCalendar />} /> {/* Add route for the Calendar component */}
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
        <Link to="/calendar"> {/* Add a Link to the Calendar page */}
          <button>Calendar</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
