import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import News from './News';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <div className="header">
        <div className="left">
          <img src="/stock-logo.svg" alt="Stock Tracker Logo" />
          <h1>Stock Tracker</h1>
        </div>
        <div className="right">
          <Link to="/news">
            <button>News</button>
          </Link>
        </div>
      </div>

      <main>
        <h1 id="h1Main">The World’s Leading <br></br>
          Cryptocurrency Platform</h1>

        <h2 id="h2Main">Buy Bitcoin, Ethereum, and all your favourite crypto</h2>

        <ul id="mainList">
          <li>✔ Trusted by more than 80M users world-wide</li>
          <li> ✔ Leader in regulatory compliance and security certifications</li>
          <li> ✔ The industry’s most comprehensive insurance coverage and verified proof of reserves</li>
        </ul>

      </main>
    </div>
  );
}

export default App;
