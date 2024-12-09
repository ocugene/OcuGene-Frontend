import React, { useState } from 'react';
import './changePassword.css';

const ChangePassword = ({ event, onSave, onClose, username }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    // const updatedEvent = {
    //   ...event,
    //   title: formData.title,
    //   date: formData.date,
    //   type: formData.type,
    //   time: `${formData.start_time} - ${formData.end_time}`,
    //   location: formData.location,
    // };
    const changePassForm = {
      username : username,
      userPassword : newPassword
    }
    try {
      const response = await fetch(
        'https://ocugene-backend-production.up.railway.app/user/change-password',
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'PUT',
          body: JSON.stringify(changePassForm),
        }
      );      const data = await response.text();
              console.log(data)
    } catch (error) {
      console.error('Error fetching user information:', error);
    }
    // onSave(event.id);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2 className="form-header">Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="field-container">
            <label htmlFor="title">Current Password</label>
            <input
              type="password" 
              name="password" 
            //   value={password}
              onChange={(e) => setOldPassword(e.target.value)} 
              required
            />
          </div>
          <div className="field-container">
            <label htmlFor="title">New Password</label>
            <input
              type="password" 
              name="password" 
            //   value={password}
              onChange={(e) => setNewPassword(e.target.value)} 
              required
            />
          </div>
          <div className="field-container">
            <label htmlFor="title">Confirm Password</label>
            <input
              type="password" 
              name="password" 
            //   value={password}
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required
            />
          </div>
          <button type="submit" className="save-button">Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;