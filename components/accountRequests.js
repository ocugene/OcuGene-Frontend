import React, { useState,useEffect } from 'react';
import './accountRequests.css';

const AccountRequests = () => {
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
  const updateRequestStatus = async (requestId, newStatus) => {
    try {
      const response = await fetch(`http://localhost:8080/request/updateStatus/${requestId}/${newStatus}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        // Update the local state after a successful update
        setRequests((prevRequests) =>
          prevRequests.map((request) =>
            request.requestId === requestId ? { ...request, status: newStatus } : request
          )
        );
      } else {
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleAccept = (request) => {
    console.log('Accept:', request)
    updateRequestStatus(request.requestId, "accepted");
  }

  const handleReject = (request) => {
    console.log('Reject:', request)
    updateRequestStatus(request.requestId, "rejected");
  }
  return (
    <div className="requests-container">
      {requests.filter(request => (request.status == "pending")).map((request) => (
        <div key={request.requestId} className="request-card">
          <div className="request-content">
            <p><strong>Email:</strong> {request.email}</p>
            <p><strong>Account Type:</strong> {request.userType}</p>
            <p><strong>Institution:</strong> {request.institution}</p>
            <p><strong>Supporting Documents:</strong> <a href={request.supportingDocuments} target="_blank" rel="noopener noreferrer">View Documents</a></p>
            <p><strong>Message/Query:</strong> {request.message}</p>
          </div>
          <div className="event-card-buttons">
            <button className="accept-button" onClick={() => handleAccept(request)}>Accept</button>
            <button className="reject-button" onClick={() => handleReject(request)}>Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountRequests;