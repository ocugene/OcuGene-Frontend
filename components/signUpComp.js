import React, { useState } from 'react';
import './signUpComp.css';

const SignUpComp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    reEnterPassword: '',
    userType: '',
    clinicianEmail: '',
    licenseNumber: '',
    idOrPrcLicense: '',
    clinicianMessage: '',
    researcherEmail: '',
    idOrCertificate: '',
    institution: '',
    researcherMessage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Sign up with', formData);
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
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      name="clinicianEmail" 
                      value={formData.clinicianEmail}
                      onChange={handleChange} 
                      required
                    />
                  </div>
                  <div className="field-container">
                    <label>License Number</label>
                    <input 
                      type="text" 
                      name="licenseNumber" 
                      value={formData.licenseNumber}
                      onChange={handleChange} 
                      required
                    />
                  </div>
                  <div className="field-container">
                    <label>ID or PRC License</label>
                    <input 
                      type="url" 
                      name="idOrPrcLicense" 
                      value={formData.idOrPrcLicense}
                      onChange={handleChange} 
                      required
                    />
                  </div>
                  <div className="field-container">
                    <label>Message/Query</label>
                    <textarea 
                      name="clinicianMessage" 
                      value={formData.clinicianMessage}
                      onChange={handleChange} 
                    />
                  </div>
                </>
              )}
              {formData.userType === 'researcher' && (
                <>
                  <div className="field-container">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      name="researcherEmail" 
                      value={formData.researcherEmail}
                      onChange={handleChange} 
                      required
                    />
                  </div>
                  <div className="field-container">
                    <label>ID or Certificate of Excellence</label>
                    <input 
                      type="url" 
                      name="idOrCertificate" 
                      value={formData.idOrCertificate}
                      onChange={handleChange} 
                      required
                    />
                  </div>
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
                    <label>Message/Query</label>
                    <textarea 
                      name="researcherMessage" 
                      value={formData.researcherMessage}
                      onChange={handleChange} 
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpComp;