import React, { useState } from 'react';
import './signUpComp.css';

const SignUpComp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    reEnterPassword: '',
    userType: '',
    supportingDocuments: '',
    institution: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    if(formData.password == formData.reEnterPassword){
      console.log('Sign up with', formData);
      //Add other actions here

      const response = await fetch('http://localhost:8080/request/addRequest', {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(formData)
      });
  
      // Parse the response as JSON
      const data = await response.json();
      console.log(data);
    }else {
      console.log("Passwords do not match");
      //Add other actions here
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
                <label>Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange} 
                  required
                />
              </div>
              <div className="field-container">
                <label>Password</label>
                <input 
                  type="password" 
                  name="password" 
                  value={formData.password}
                  onChange={handleChange} 
                  required
                />
              </div>
              <div className="field-container">
                <label>Re-enter Password</label>
                <input 
                  type="password" 
                  name="reEnterPassword" 
                  value={formData.reEnterPassword}
                  onChange={handleChange} 
                  required
                />
              </div>
            </div>
            <div className="vertical-line"></div>
            <div className="right-column">
              <div className="field-container">
                <label>User Type</label>
                <div className="radio-container">
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
              </div>
              {formData.userType === 'clinician' && (
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
              )}
            </div>
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
          <sub>* All requests are subject to assessment by the administrators. An email confirmation will be sent out 
              upon approval. 
          </sub>
        </form>
      </div>
    </div>
  );
};

export default SignUpComp;