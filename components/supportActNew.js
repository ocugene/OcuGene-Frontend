import React, { useState } from 'react';
import './supportActNew.css';

const SupportActNew = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    type: '',
    start_time: '',
    end_time: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://ocugene-backend-production.up.railway.app/activity/add', {
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
  };

  return (
    <div className="form-container">
      <h2 className="form-header">New Support Activity</h2>
      <form onSubmit={handleSubmit}>
        <div className='row-container'>
            <div className="field-container">
            <label htmlFor="title">Title of Activity</label>
            <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
            />
            </div>
        </div>
        <div className="row-container">
          <div className="field-container">
            <label htmlFor="date">Date of Activity</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field-container">
            <label htmlFor="type">Type of Activity</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Symposium">Symposium</option>
              <option value="Concert">Concert</option>
              <option value="Support Group">Support Group</option>
            </select>
          </div>
        </div>
        <div className="row-container">
          <div className="field-container">
            <label htmlFor="start_time">Time</label>
            <div className="time-container">
              <input
                type="time"
                id="start_time"
                name="start_time"
                value={formData.start_time}
                onChange={handleChange}
                required
              />
              <span>to</span>
              <input
                type="time"
                id="end_time"
                name="end_time"
                value={formData.end_time}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="field-container">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="save-button">Save</button>
      </form>
    </div>
  );
};

export default SupportActNew;