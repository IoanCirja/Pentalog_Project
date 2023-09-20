import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import News from "./News";
import Charts from "./Charts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/" element={<Home />} />
        <Route path="/charts" element={<Charts />} />
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
      <Link to="/charts">
        <button>Charts</button>
      </Link>
      <div className="right">
        <Link to="/news">
          <button>News</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
