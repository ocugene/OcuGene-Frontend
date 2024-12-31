import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './signUpComp.css';

const SignUpComp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    reEnterPassword: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    userType: '',
    supportingDocuments: '',
    institution: '',
    message: ''
  });

  const [passwordsDoNotMatch, setPasswordsDoNotMatch] = useState(false);
const [shakeEffect, setShakeEffect] = useState(false);  

  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push('/login'); // Navigate to /login/signup
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    if(formData.password == formData.reEnterPassword){
      setPasswordsDoNotMatch(false); // Reset if passwords match
      console.log('Sign up with', formData);
      //Add other actions here

      try {

        const response = await fetch('https://ocugene-backend-1-production.up.railway.app/request/addRequest', {
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify(formData)
        });
    
        // Parse the response as JSON
        const data = await response.json();
        localStorage.setItem('signup_success', 'true');
        router.push('/');
        
      } catch (error) {
        
        console.log("Error in signing up: ", error);
      }
      
    }else {
      // console.log("Passwords do not match");
      //Add other actions here
      setPasswordsDoNotMatch(true);
      setShakeEffect(true);
      setTimeout(() => setShakeEffect(false), 300);

      const fadeOutTimer = setTimeout(() => {
        setShakeEffect(false);
      }, 4000); // Keep the shake for 3 seconds
    
      return () => clearTimeout(fadeOutTimer); // Cleanup on unmount

      // Trigger shake and persistent error color
      // setPasswordsDoNotMatch(true);
      // setShakeEffect(true);
      
      // // Remove shake effect after 0.3s (duration of shake animation)
      // setTimeout(() => setShakeEffect(false), 300);
    }
    
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="left-column">
              <div className="field-container">
                <label><b>Email</b></label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange} 
                  required
                />
              </div>
              <div className="field-container">
                <label><b>Password</b></label>
                <input 
                  type="password" 
                  name="password" 
                  value={formData.password}
                  onChange={handleChange} 
                  required
                  className={`${passwordsDoNotMatch ? 'error-input' : ''} ${shakeEffect ? 'shake' : ''}`}
                />
                {
                  passwordsDoNotMatch &&

                  <sub className={`${passwordsDoNotMatch ? 'error-input-sub' : ''} ${shakeEffect ? 'shake' : ''}`}>Passwords do not match</sub>
                }
                
              </div>
              <div className="field-container">
                <label><b>Re-enter Password</b></label>
                <input 
                  type="password" 
                  name="reEnterPassword" 
                  value={formData.reEnterPassword}
                  onChange={handleChange} 
                  required
                  className={`${passwordsDoNotMatch ? 'error-input' : ''} ${shakeEffect ? 'shake' : ''}`}
                />
                {
                  passwordsDoNotMatch &&

                  <sub className={`${passwordsDoNotMatch ? 'error-input-sub' : ''} ${shakeEffect ? 'shake' : ''}`}>Passwords do not match</sub>
                }
              </div>
              
              <div className="field-container">
                <label><b>First Name</b></label>
                <input 
                  type="text" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleChange} 
                  required
                />
              </div>
              <div className="field-container">
                <label><b>Last Name</b></label>
                <input 
                  type="text" 
                  name="lastName" 
                  value={formData.lastName}
                  onChange={handleChange} 
                  required
                />
              </div>
            </div>
            <div className="vertical-line"></div>
            <div className="right-column">
            <div className="user-type-container">
                <label><b>User Type: </b></label>
                <label>
                  <input 
                    type="radio" 
                    name="userType" 
                    value="clinician" 
                    checked={formData.userType === 'clinician'}
                    onChange={handleChange} 
                    required
                  />
                  Clinician
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="userType" 
                    value="researcher" 
                    checked={formData.userType === 'researcher'}
                    onChange={handleChange} 
                    required
                  />
                  Researcher
                </label>
              </div>
              <div className="field-container">
                <label><b>Contact Number</b></label>
                <input 
                  type="text" 
                  name="contactNumber" 
                  value={formData.contactNumber}
                  onChange={handleChange} 
                  required
                />
              </div>
              <div className="field-container">
                <label><b>Institution</b></label>
                <input 
                  type="text" 
                  name="institution" 
                  value={formData.institution}
                  onChange={handleChange} 
                  required
                />
              </div>
              <div className="field-container">
                <label><b>Supporting Documents</b></label>
                <input 
                  type="url" 
                  name="supportingDocuments" 
                  value={formData.supportingDocuments}
                  onChange={handleChange} 
                  required
                />
                <sub>* Google Drive link to all supporting documents i.e. picture of your ID and License/Certificate of Excellence</sub>
                <sub>* Please make sure to set the access to public</sub>
              </div>
              <div className="field-container">
                <label><b>Message/Query</b></label>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange} 
                />
              </div>
              {/* {formData.userType === 'clinician' && (

              )}
              {formData.userType === 'researcher' && (
                <>
                  <div className="field-container">
                    <label>Institution</label>
                    <input 
                      type="text" 
                      name="institution" 
                      value={formData.institution}
                      onChange={handleChange} 
                      required
                    />
                  </div>
                  <div className="field-container">
                    <label>Supporting Documents</label>
                    <input 
                      type="url" 
                      name="supportingDocuments" 
                      value={formData.supportingDocuments}
                      onChange={handleChange} 
                      required
                    />
                    <sub>* Gdrive link to all supporting documents i.e. picture of your ID and License/Certificate of Excellence</sub>
                    <sub>* Please make sure to set the access to public</sub>
                  </div>
                  <div className="field-container">
                    <label>Message/Query</label>
                    <textarea 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange} 
                    />
                  </div>
                </>
              )} */}
            </div>
          </div>
          <button type="submit" className="signup-btn"><b>Sign Up</b></button>
          <sub className='submit-sub'> All requests are subject to assessment by the administrators. An email confirmation will be sent out 
              upon approval. 
          </sub>
        </form>
        <p className="login-link" onClick={handleLoginRedirect}> Already have an account? Log in </p>
      </div>
    </div>
  );
};

export default SignUpComp;