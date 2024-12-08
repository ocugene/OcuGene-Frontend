import React, { useState } from 'react';
import './changePassword.css';

const ChangePassword = ({ event, onSave, onClose }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // const updatedEvent = {
    //   ...event,
    //   title: formData.title,
    //   date: formData.date,
    //   type: formData.type,
    //   time: `${formData.start_time} - ${formData.end_time}`,
    //   location: formData.location,
    // };
    onSave(event.id);
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
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          <div className="field-container">
            <label htmlFor="title">New Password</label>
            <input
              type="password" 
              name="password" 
            //   value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          <div className="field-container">
            <label htmlFor="title">Confirm Password</label>
            <input
              type="password" 
              name="password" 
            //   value={password}
              onChange={(e) => setPassword(e.target.value)} 
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