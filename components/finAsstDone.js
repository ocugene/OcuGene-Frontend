import React, { useState } from 'react';
import './finAsstDone.css';

const DonationsDone = () => {
  const [finAssistance, setFinAssistance] = useState([
    { id: 1, email: 'john.doe@example.com', message: 'I would like to donate to the registry.' },
    { id: 2, email: 'jane.smith@example.com', message: 'How can I support the group?' },
    { id: 3, email: 'alice.jones@example.com', message: 'I need more information about financial assistance.' },
  ]);

  const handleResponded = (id) => {
    console.log(`Responded to donation with id: ${id}`);
    // You can add logic to mark the donation as responded
  };

  return (
    <div className="inquiry-container">
      {finAssistance.map((finAsst) => (
        <div key={finAsst.id} className="inquiry-card">
          <div className="inquiry-content">
            <p><strong>Email:</strong> {finAsst.email}</p>
            <p><strong>Message:</strong> {finAsst.message}</p>
          </div>
          <button className="responded-button" onClick={() => handleResponded(finAsst.id)}>Mark as Unread</button>
        </div>
      ))}
    </div>
  );
};

export default DonationsDone;