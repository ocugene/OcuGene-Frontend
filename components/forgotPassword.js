import React, { useState } from 'react';
import './forgotPassword.css';
import ChangePassword from './changePassword'; // Import ChangePassword modal

const ForgotPassword = ({ onClose }) => {
  const [isVerificationVisible, setIsVerificationVisible] = useState(false); // Tracks if verification section is visible
  const [isChangePasswordVisible, setIsChangePasswordVisible] = useState(false); // Tracks if ChangePassword should be shown

  const handleSendVerificationCode = (e) => {
    e.preventDefault();
    // Logic to send verification code goes here
    setIsVerificationVisible(true); // Show the verification section
  };

  const handleVerificationSubmit = () => {
    // Logic for verification code submission
    console.log('Verification code submitted');
    setIsChangePasswordVisible(true); // Show the ChangePassword modal
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>

        {/* Show ChangePassword if it's visible */}
        {isChangePasswordVisible ? (
          <ChangePassword onClose={onClose} />
        ) : (
          <>
            <h2 className="form-header">Forgot Password</h2>
            <form onSubmit={handleSendVerificationCode}>
              <div className="field-container">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <button type="submit" className="save-button">Send verification code</button>
            </form>

            {/* Conditionally render the verification section */}
            {isVerificationVisible && (
              <div className="verify-email-section">
                <div className="field-container">
                  <p>Enter the verification code sent to your email:</p>
                  <input type="text" placeholder="Verification Code" required />
                </div>
                <button className="verify-code-button" onClick={handleVerificationSubmit}>
                  Verify Code
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
