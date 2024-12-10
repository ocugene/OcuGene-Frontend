import React, { useState } from 'react';
import './supportActEdit.css';

const SupportActEdit = ({ event, onSave, onClose }) => {

  const convertTo24HourFormat = (time12h) => {
    // Remove AM/PM and trim extra spaces
    const [time, modifier] = time12h.match(/(\d{1,2}:\d{2})(AM|PM)/).slice(1);
    
    let [hours, minutes] = time.split(':').map(Number);
  
    if (modifier === 'PM' && hours !== 12) {
      hours += 12; // Convert PM hours except for 12 PM
    } else if (modifier === 'AM' && hours === 12) {
      hours = 0; // Convert 12 AM to 00
    }
  
    // Return in "HH:mm" 24-hour format
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  };

  const [formData, setFormData] = useState({
    title: event.title,
    date: event.date,
    type: event.type,
    start_time: convertTo24HourFormat(event.time.split(' - ')[0]),
    end_time: convertTo24HourFormat(event.time.split(' - ')[1]),
    location: event.location,
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
    onSave(event.id, formData);
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
          <button type="submit" className="save-button"><b>SAVE</b></button>
        </form>
      </div>
    </div>
  );
};

export default SupportActEdit;