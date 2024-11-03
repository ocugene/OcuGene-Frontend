import React, { useState, useEffect } from 'react';
import './accountRequestRejected.css';

const accountRequestRejected = () => {
  const [requests, setRequests] = useState([]);
  useEffect(()=> {
    fetchRequestsData();
  }, []);

  const fetchRequestsData = async () => {
    const response = await fetch("http://localhost:8080/request/getAllRequests");
    const responseData = await response.json();
    console.log(responseData);
    setRequests(responseData);
  };


  return (
    <div className="requests-container">
      {requests.filter(request => (request.status == "rejected")).map((request) => (
        <div key={request.id} className="request-card">
          <div className="request-content">
          <p><strong>Email:</strong> {request.email}</p>
            <p><strong>Account Type:</strong> {request.userType}</p>
            <p><strong>Institution:</strong> {request.institution}</p>
            <p><strong>Supporting Documents:</strong> <a href={request.supportingDocuments} target="_blank" rel="noopener noreferrer">View Documents</a></p>
            <p><strong>Message/Query:</strong> {request.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default accountRequestRejected;