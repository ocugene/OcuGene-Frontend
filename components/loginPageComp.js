'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './loginPageComp.css';
import ForgotPassword from './forgotPassword'; // Import the modal component

const LoginPageComp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isForgotPasswordVisible, setIsForgotPasswordVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem('role', '');
    localStorage.setItem('is_logged_in', 'false');
    localStorage.setItem('username', '');
    localStorage.setItem('view_patientCode', '');
    localStorage.setItem('signup_success', 'false');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tempUser = {
      username,
      userPassword: password,
    };

    try {
      const response = await fetch(
        'https://ocugene-backend-production.up.railway.app/user/getUser',
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(tempUser),
        }
      );

      const data = await response.json();

      if (data.success) {
        console.log('Login successful:', data.user);
        localStorage.setItem('role', data.user.userType.toLowerCase());
        localStorage.setItem('is_logged_in', 'true');
        localStorage.setItem('username', data.user.username);
        router.push('/home');
      } else {
        console.log('Login failed:', data.message || 'Invalid credentials.');
      }
    } catch (error) {
      console.log('Error logging in: ', error);
    }
  };

  const handleForgotPasswordClick = () => {
    setIsForgotPasswordVisible(true); // Show ForgotPassword modal
  };

  const closeForgotPasswordModal = () => {
    setIsForgotPasswordVisible(false); // Hide ForgotPassword modal
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
            <label>
              <b>Username</b>
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="field-container">
            <label>
              <b>Password</b>
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="forgotpw-link" onClick={handleForgotPasswordClick}>
              Forgot password?
            </p>
          </div>
          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>
        <p className="signup-link" onClick={handleSignupRedirect}>
          No Account? Request Here
        </p>
      </div>

      {/* Forgot Password Modal */}
      {isForgotPasswordVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <ForgotPassword onClose={closeForgotPasswordModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPageComp;
