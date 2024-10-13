'use client';

import React, { useState } from 'react';
import './loginPageComp.css'; // Assuming you have a CSS file for styling

const LoginPageComp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., call an API)
    console.log('Logging in with', { username, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-card-header">Log In</div>
        <form onSubmit={handleSubmit}>
          <div className="field-container">
            <label>Username</label>
            <input 
              type="text" 
              name="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
              required
            />
          </div>
          <div className="field-container">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          <button type="submit" className="login-btn">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPageComp;
