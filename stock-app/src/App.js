import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import News from './News';
import Modal from 'react-modal';
import SignupForm from './SignupForm';

Modal.setAppElement('#root');

function App() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/" element={<Home openSignupModal={openSignupModal} />} />
      </Routes>
      <Modal
        isOpen={isSignupModalOpen}
        onRequestClose={closeSignupModal}
        contentLabel="Login"
      >
        <SignupForm isOpen={isSignupModalOpen} onRequestClose={closeSignupModal} />
      </Modal>
    </Router>
  );
}

function Home({ openSignupModal }) {
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
      <div id="cryptoWorld">
        <div id="btn-h2-main">
        <button id="btnDialog" onClick={openSignupModal}>START MINING ➡</button>
        <h2 id="h2Main">Your crypto journey starts here.</h2>
        </div>
        <ul id="mainList">
          <li>⚪ Buy crypto</li>
          <li> ⚪ Recurring Buy</li>
          <li> ⚪ Price Alerts</li>
          <li> ⚪  On-chain Staking</li>
         
        </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
