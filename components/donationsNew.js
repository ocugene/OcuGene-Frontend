import React, { useState } from 'react';
import './donationsNew.css';

const DonationsNew = ({donations, setDonations}) => {
  // const [donations, setDonations] = useState([
  //   { id: 1, email: 'john.doe@example.com', message: 'I would like to donate to the registry.' },
  //   { id: 2, email: 'jane.smith@example.com', message: 'How can I support the group?' },
  //   { id: 3, email: 'alice.jones@example.com', message: 'I need more information about financial assistance.' },
  // ]);

  const handleResponded = (id, email) => {
    // console.log(`Responded to donation with id: ${id}`);
    // You can add logic to mark the donation as responded
    if(window.confirm(`Are you sure you have already responded to this inquiry by ${email}?`)){

      fetch(`http://localhost:8080/query/respond?queryID=${id}`, {
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
          <button className="responded-button" onClick={() => handleResponded(donation.queryID, donation.email)}>Mark as Done</button>
        </div>
      ))}
    </div>
  );
};

export default DonationsNew;