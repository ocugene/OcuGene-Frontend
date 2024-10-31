import React, { useState } from 'react';
import './supportActEdit.css';

const SupportActEdit = ({ event, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    title: event.title,
    date: event.date,
    type: event.type,
    startTime: event.time.split(' - ')[0],
    endTime: event.time.split(' - ')[1],
    location: event.location,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEvent = {
      ...event,
      title: formData.title,
      date: formData.date,
      type: formData.type,
      time: `${formData.startTime} - ${formData.endTime}`,
      location: formData.location,
    };
    onSave(updatedEvent);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2 className="form-header">Edit Support Activity</h2>
        <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default SupportActEdit;