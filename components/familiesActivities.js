import {React, useState, useEffect} from 'react';
import './familiesActivities.css';

const FamiliesSupGrp = () => {
  const [events, setEvents] = useState([
    // {
    //   id: 1,
    //   title: 'Symposium on Genetic Disorders',
    //   type: 'Symposium',
    //   date: '2023-10-15',
    //   time: '10:00AM - 02:00PM',
    //   location: 'Community Hall, City Center'
    // },
    // {
    //   id: 2,
    //   title: 'Charity Concert for Rare Diseases',
    //   type: 'Concert',
    //   date: '2023-11-05',
    //   time: '06:00PM - 09:00PM',
    //   location: 'Grand Auditorium, Downtown'
    // },
    // {
    //   id: 3,
    //   title: 'Monthly Support Group Meeting',
    //   type: 'Support Group',
    //   date: '2023-12-01',
    //   time: '04:00PM - 06:00PM',
    //   location: 'Health Center, Westside'
    // }
  ]);

  const transformEventData = (serverData) => {
    return serverData.map((event) => {
      // Parse the date to 'YYYY-MM-DD'
      const eventDate = new Date(event.date);
      const formattedDate = eventDate.toISOString().slice(0, 10);
  
      // Convert start and end times to 12-hour format
      const formatTime = (time) => {
        let [hour, minute] = time.split(':');
        const isPM = hour >= 12;
        hour = hour % 12 || 12;
        const suffix = isPM ? 'PM' : 'AM';
        return `${String(hour).padStart(2, '0')}:${minute}${suffix}`;
      };
  
      const startTime = formatTime(event.startTime);
      const endTime = formatTime(event.endTime);
  
      return {
        id: event.activityID,
        title: event.title,
        type: event.activityType,
        date: formattedDate,
        time: `${startTime} - ${endTime}`,
        location: event.location,
      };
    });
  };

  useEffect(() => {

    fetch('https://ocugene-backend-1-production.up.railway.app/activity/get-all', {
      method: 'GET',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setEvents(transformEventData(data));
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle errors here
    });

  }, [])

  return (
    <div>
      {events.map((event, index) => (
        <div key={index} className="event-card">
          <h2 className="event-title">{event.title}</h2>
          <ul className="event-details">
            <li>{event.type}</li>
            <li>{event.date}</li>
            <li>{event.time}</li>
            <li>{event.location}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FamiliesSupGrp;