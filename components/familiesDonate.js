import React, { useState } from 'react';
import './familiesDonate.css';

const FamiliesDonate = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to submit this form?')) {
      // Handle form submission logic here
      // console.log('Email:', email);
      // console.log('Message:', message);

      const formData = {
        email: email,
        message: message,
      };

      fetch('http://localhost:8080/query/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        // You can handle successful submission here
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors here
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="donate-form">
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

export default FamiliesDonate;