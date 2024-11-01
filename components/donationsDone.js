import React, { useState } from 'react';
import './donationsDone.css';

const DonationsDone = ({donations, setDonations}) => {
  // const [donations, setDonations] = useState([
  //   { id: 1, email: 'john.doe@example.com', message: 'I would like to donate to the registry.' },
  //   { id: 2, email: 'jane.smith@example.com', message: 'How can I support the group?' },
  //   { id: 3, email: 'alice.jones@example.com', message: 'I need more information about financial assistance.' },
  // ]);

  const handleMarkAsUnread = (id, email) => {
    // console.log(`Responded to donation with id: ${id}`);
    // You can add logic to mark the donation as responded
    if(window.confirm(`Are you sure you want to mark this inquiry by ${email} as unread?`)){

      fetch(`http://localhost:8080/query/mark-as-unread?queryID=${id}`, {
        method: 'PUT',
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // console.log('Success:', data);
        // You can handle successful submission here
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors here
      });

    }
    window.location.reload();
  };

  return (
    <div className="inquiry-container">
      {donations.map((donation) => (
        <div key={donation.queryID} className="inquiry-card">
          <div className="inquiry-content">
            <p><strong>Email:</strong> {donation.email}</p>
            <p><strong>Message:</strong> {donation.message}</p>
          </div>
          <button className="responded-button" onClick={() => handleMarkAsUnread(donation.queryID, donation.email)}>Mark as Unread</button>
        </div>
      ))}
    </div>
  );
};

export default DonationsDone;