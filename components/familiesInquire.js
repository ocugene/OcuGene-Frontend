import React, { useState } from 'react';
import './familiesInquire.css';

const FamiliesDonate = () => {

  const [formData, setFormData] = useState(
    {
      email: '',
      message: '',
      type: ''
    }
  );

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prevFormData => ({...prevFormData, [name]:value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to submit this form?')) {

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
          <label htmlFor="email"><b>Email Address</b></label>
          <input
            type="text"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type"><b>Email Subject</b></label>
          <select
            id="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value='' disabled> Select Subject</option>
            <option value='DONATION'> Donate to Registry</option>
            <option value='FINANCIAL ASSISTANCE'> Financial Assistance</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message"><b>Message/Query</b></label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default FamiliesDonate;