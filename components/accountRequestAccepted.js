import React, { useState } from 'react';
import './accountRequestAccepted.css';

const AccountRequestAccepted = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      accountType: 'Researcher',
      institution: 'University of Science',
      supportingDocuments: 'https://drive.google.com/file/d/1',
      message: 'I would like to join the research team.',
    },
    {
      id: 2,
      accountType: 'Clinician',
      institution: 'City Hospital',
      supportingDocuments: 'https://drive.google.com/file/d/2',
      message: 'I am interested in collaborating on clinical trials.',
    },
    {
      id: 3,
      accountType: 'Researcher',
      institution: 'Tech Institute',
      supportingDocuments: 'https://drive.google.com/file/d/3',
      message: 'Looking forward to contributing to the research.',
    },
  ]);

  return (
    <div className="requests-container">
      {requests.map((request) => (
        <div key={request.id} className="request-card">
          <div className="request-content">
            <p><strong>Account Type:</strong> {request.accountType}</p>
            <p><strong>Institution:</strong> {request.institution}</p>
            <p><strong>Supporting Documents:</strong> <a href={request.supportingDocuments} target="_blank" rel="noopener noreferrer">View Documents</a></p>
            <p><strong>Message/Query:</strong> {request.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountRequestAccepted;