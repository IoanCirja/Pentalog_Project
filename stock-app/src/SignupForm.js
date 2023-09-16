import React, { useState } from 'react';

function SignupForm({ isOpen, onRequestClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Login with:', username, 'and password:', password);
  
    onRequestClose();
  };

  return (
    <div className={`signup-form ${isOpen ? 'open' : ''}`}>
      <dialog id="dialogLogin"onSubmit={handleSubmit}>
        <h2 id ="h2Dialog">Access the Cryptoverse</h2>
        <div>
          <label>Username </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password   </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" id = "loginButton">Login</button>
      </dialog>
    </div>
  );
}

export default SignupForm;
