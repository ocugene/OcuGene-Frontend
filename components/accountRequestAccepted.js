import React, { useState,useEffect } from 'react';
import './accountRequestAccepted.css';

const AccountRequestAccepted = () => {

  const [requests, setRequests] = useState([]);
  
  useEffect(()=> {
    fetchRequestsData();
  }, []);

  const fetchRequestsData = async () => {

    try {
      const response = await fetch("http://localhost:8080/request/getAllRequests");
      const responseData = await response.json();
      setRequests(responseData);
    } catch (error) {
      console.log("Error fecthing accepted account creation requests: ", error);
    }

  };


  return (
    <div className="requests-container">
      {requests.filter(request => (request.status == "accepted")).map((request) => (
        <div key={request.requestId} className="request-card">
          <div className="request-content">
            <p><strong>Name:</strong> {request.firstName} {request.lastName}</p>
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

export default AccountRequestAccepted;