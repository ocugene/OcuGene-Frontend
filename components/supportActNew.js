import React, { useState } from 'react';
import './supportActNew.css';

const SupportActNew = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    type: '',
    startTime: '',
    endTime: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
            <label htmlFor="startTime">Time</label>
            <div className="time-container">
              <input
                type="time"
                id="startTime"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                required
              />
              <span>to</span>
              <input
                type="time"
                id="endTime"
                name="endTime"
                value={formData.endTime}
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