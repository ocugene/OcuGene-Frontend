import React, { useState } from 'react';
import './forgotPassword.css';
import { useRouter } from 'next/navigation';

const ForgotPassword = ({ onClose }) => {

  const router = useRouter();

  const [isVerificationVisible, setIsVerificationVisible] = useState(false); // Tracks if verification section is visible
  const [isChangePasswordVisible, setIsChangePasswordVisible] = useState(false); // Tracks if ChangePassword should be shown

  const [userEmail, setUserEmail] = useState("");

  const [verificationCode, setIsVerificationCode] = useState("");

  //this is the id of the user asking for pasword reset
  const [user, setUser] = useState({

  });

  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // onChange function to update userEmail state
  const handleEmailChange = (event) => {
    setUserEmail(event.target.value); // Update the state with the input value
  };

  // onChange function to update verification code state
  const handleVerificationCodeChange = (event) => {
    setIsVerificationCode(event.target.value); // Update the state with the input value
  };

  const handleSendVerificationCode = async (e) => {
    e.preventDefault();
    // Logic to send verification code goes here
    setIsVerificationVisible(true); // Show the verification section

    // Log user email for debugging
    // console.log("Email entered: ", userEmail);

    // call send code to email api endpoint
    try {
      const response = await fetch(`https://ocugene-backend-1-production.up.railway.app/user/forgot-password?email=${userEmail}`);

      const data = await response.text();
      console.log(data);

    } catch (error) {
      console.log('Error sending code to your email: ', error);
    }
  };

  const handleVerificationSubmit = async () => {
    // Logic for verification code submission
    // console.log('Verification code submitted');
    
    // console.log("The verification code entered is: ", verificationCode);

    //now, determine to which user does the verfication code correspond
    //call api endpoint to determine which user is asking for password reset
    try {
      const response = await fetch(`https://ocugene-backend-1-production.up.railway.app/user/verify-user-using-code?code=${verificationCode}`, {
        method: 'POST', // Use POST instead of GET
        headers: {
          'Content-Type': 'application/json', // Optional: set header if your backend expects it
        },
      });
    
      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Failed to verify user with the code');
      }
    
      // Parse the response as JSON
      const data = await response.json();
    
      // console.log("The user asking for a password reset has detials: ", data);
    
      setUser(data);
      setIsChangePasswordVisible(true); // Show the ChangePassword modal
    
    } catch (error) {
      console.error('Error verifying user with the code: ', error);
    }

  };

  const handleSubmitNewPassword = async (e) => {
    e.preventDefault();
  
    // Check if the new password and confirm password are the same
    if (newPassword !== confirmNewPassword) {
      alert('The new password and confirm password do not match.');
      return; // Prevent form submission if passwords don't match
    }
  
    // Prepare the form data to send in the request body
    const changePassForm = {
      username: user.username,
      userPassword: newPassword,
    };
  
    try {
      const response = await fetch(
        'https://ocugene-backend-1-production.up.railway.app/user/change-password',
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'PUT',
          body: JSON.stringify(changePassForm),
        }
      );
  
      // Check if the response was successful (status 200)
      if (!response.ok) {
        throw new Error('Failed to change the password');
      }
  
      const data = await response.text(); // Read the response as text (or use response.json() if the backend returns JSON)
  
      // You can log the response data if needed (optional)
      // console.log(data);
  
      // Show an alert or message indicating the password was successfully changed
      alert('Password changed successfully!');
  
      // Navigate to the login page
      setIsChangePasswordVisible(false);
      setIsVerificationVisible(false);

      // Close the modal by calling onClose (this function comes from props)
      onClose();  // This will close the forgot password modal by invoking the passed onClose function

      router.push('/login'); // Use the router to navigate to login
  
    } catch (error) {
      console.error('Error fetching user information:', error);
      alert('There was an error changing your password. Please try again.');
    }
  };
  

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>

        {/* Show ChangePassword if it's visible */}
        {isChangePasswordVisible ? (
          
          <div className="modal">
            <div className="modal-content">
              <span className="close-button" onClick={onClose}>&times;</span>
              <h2 className="form-header">Change Password</h2>

              <form onSubmit={handleSubmitNewPassword}> 

                <div className="field-container">
                  <label htmlFor="title">New Password</label>
                  <input
                    type="password" 
                    name="password" 
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)} 
                    required
                  />
                </div>

                <div className="field-container">
                  <label htmlFor="title">Confirm Password</label>
                  <input
                    type="password" 
                    name="password" 
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)} 
                    required
                  />
                </div>

                <button type="submit" className="save-button">Change Password</button>
              </form>
            </div>
          </div>


        ) : (
          <>
            <h2 className="form-header">Forgot Password</h2>
            <form onSubmit={handleSendVerificationCode}>
              <div className="field-container">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={userEmail} onChange={handleEmailChange} required />
              </div>
              <button type="submit" className="save-button">Send verification code</button>
            </form>

            {/* Conditionally render the verification section */}
            {isVerificationVisible && (
              <div className="verify-email-section">
                <div className="field-container">
                  <p>Enter the verification code sent to your email:</p>

                  <input type="text" placeholder="Verification Code" value={verificationCode} onChange={handleVerificationCodeChange} required />

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
