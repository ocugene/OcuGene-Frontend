'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import Next.js router for navigation
import './loginPageComp.css'; // Assuming you have a CSS file for styling
import { resolve } from 'styled-jsx/css';

const LoginPageComp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Initialize the router

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., call an API)
    console.log('Logging in with', { username, password });
    const tempUser = {
      username : username,
      userPassword : password
    }
    const response = await fetch('http://localhost:8080/user/getUser', {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(tempUser)
    });

    // Parse the response as JSON
    const data = await response.json();
    console.log(data);

    // Use `data.success` instead of `data.status == 200`
    if (data.success) {  // Assuming the backend sends `success: true` for successful login
        console.log("Login successful:", data.user);
        // Redirect or store user data here
    } else {  
        console.log("Login failed:", data.message || "Invalid credentials.");
        // Display the error message to the user
    }
  };

  const handleSignupRedirect = () => {
    router.push('/login/signup'); // Navigate to /login/signup
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
        <button onClick={handleSignupRedirect} className="signup-btn">
          No Account? Request Here
        </button>
      </div>
    </div>
  );
};

export default LoginPageComp;
