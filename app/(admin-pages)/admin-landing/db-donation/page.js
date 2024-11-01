'use client';

import React, { useEffect, useState } from 'react';
import NavbarLanding from '@/components/navbarLanding';
import SidebarDonations from '@/components/donationsSidebar';
import New from '@/components/donationsNew';
import Done from '@/components/donationsDone';
import './donations.css'



const DonationsPage = () => {
  const [activeComponent, setActiveComponent] = useState('new');

  const [donations, setDonations] = useState([
    // { 
    //   queryID: 1, 
    //   email: 'john.doe@example.com', 
    //   message: 'I would like to donate to the registry.',
    //   respondedFlag: false
    // },
    // { 
    //   queryID: 2, 
    //   email: 'jane.smith@example.com', 
    //   message: 'How can I support the group?',
    //   respondedFlag: false
    // },
    // { 
    //   queryID: 3, 
    //   email: 'alice.jones@example.com', 
    //   message: 'I need more information about financial assistance.',
    //   respondedFlag: false 
    // },
  ]);

  useEffect(() => {

    fetch(`http://localhost:8080/query/get-all`, {
      method: 'GET',
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      // body: JSON.stringify(updatedEvent)
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
      setDonations(data);
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle errors here
    });

  }, []);

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <NavbarLanding/>
      <div className="title-container">
        <div className='title'>Admin Portal / Registry Donations</div>
      </div>
      <div className="donations-container">
        <SidebarDonations onButtonClick={handleButtonClick} />
        <div className="content">
          {activeComponent === 'new' && <New donations={donations.filter(donation => donation.respondedFlag === false)} setDonations={setDonations}/>}
          {activeComponent === 'done' && <Done donations={donations.filter(donation => donation.respondedFlag === true)} setDonations={setDonations}/>}
        </div>
      </div>
    </div>
  )
}

export default DonationsPage