import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import News from './News';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      <nav style={{ display: location.pathname === '/news' ? 'none': 'block' }}>
        <ul>
          {location.pathname !== '/news' && (
            <li>
              <Link to="/news">News</Link>
            </li>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}


export default App;
