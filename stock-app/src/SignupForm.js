import React, { useState } from 'react';
import "./Home.css";

function SignupForm({ isOpen, onRequestClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Login with:', username, 'and password:', password);

    if (username && password) {
      setIsLoggedIn(true);
    } else {
      alert('Please fill in both username and password.');
    }
  };

  const handleClose = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    onRequestClose();
  };

  return (
    <div className={`signup-form ${isOpen ? 'open' : ''}`}>
      {isLoggedIn ? (
        <div id="output">
          <p id="dialog-text">Step into the Crypto World: Your Best Decision Today!</p>
          <img src="/crypto.svg" id="crypto-logo" alt="crypto logo" />
          <button id="start-button" onClick={handleClose}>Explore</button>
        </div>
      ) : (
        <dialog id="dialogLogin" open={isOpen}>
          <h2 id="h2Dialog">Access the Cryptoverse</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username</label>
              <input
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" id="loginButton">
              {isLoggedIn ? 'Welcome!' : 'Login'}
            </button>
          </form>
        </dialog>
      )}
    </div>
  );
}

export default SignupForm;