import React, { useState } from 'react';
import './inquiriesDone.css';

const DonationsDone = ({inquiries}) => {
  // const [inquiries, setInquiries] = useState([
  //   { id: 1, email: 'john.doe@example.com', message: 'I would like to donate to the registry.' },
  //   { id: 2, email: 'jane.smith@example.com', message: 'How can I support the group?' },
  //   { id: 3, email: 'alice.jones@example.com', message: 'I need more information about financial assistance.' },
  // ]);

  const handleMarkAsUnread = (id, email) => {
    // console.log(`Responded to donation with id: ${id}`);
    // You can add logic to mark the donation as responded
    if(window.confirm(`Are you sure you want to mark this inquiry by ${email} as unread?`)){

      fetch(`https://ocugene-backend-1-production.up.railway.app/query/mark-as-unread?queryID=${id}`, {
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
      {inquiries.map((inquiry) => (
        <div key={inquiry.queryID} className="inquiry-card">
          <div className="inquiry-content">
            <p><strong>Email:</strong> {inquiry.email}</p>
            <p><strong>Subject:</strong> {inquiry.type}</p>
            <p><strong>Message:</strong> {inquiry.message}</p>
          </div>
          <button className="responded-button" onClick={() => handleMarkAsUnread(inquiry.queryID, inquiry.email)}><b>Mark as Unread</b></button>
        </div>
      ))}
    </div>
  );
};

export default DonationsDone;