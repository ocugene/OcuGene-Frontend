import React, { useState } from 'react';
import './familiesFinAsst.css';

const FamiliesFinAsst = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to submit this form?')) {
      // Handle form submission logic here
      console.log('Email:', email);
      console.log('Message:', message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="finasst-form">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message/Query</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default FamiliesFinAsst;