'use client';

import React, { useEffect, useState } from 'react';
import NavbarLanding from '@/components/navbarLanding';
import SidebarDonations from '@/components/inquiriesSidebar';
import New from '@/components/inquiriesNew';
import Done from '@/components/inquiriesDone';
import './inquiries.css'



const DonationsPage = () => {
  const [activeComponent, setActiveComponent] = useState('new');

  const [selectedType, setSelectedType] = useState('all');

  const [inquiries, setInquiries] = useState([
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

  const [displayedInquiries, setDisplayedInquiries] = useState([]);

  const handleTypeChange = (e) => {

    const newType = e.target.value;
    setSelectedType(newType);

    setDisplayedInquiries(
      newType === 'all'
        ? inquiries // Show all inquiries
        : inquiries.filter(inquiry => inquiry.type === newType)
    );
  };

  useEffect(() => {

    fetch(`http://localhost:8080/query/get-all`, {
      method: 'GET',
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
      setInquiries(data);
      setDisplayedInquiries(data);
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
          <div>
            Filter inquiries by type: 
            <select 
              id='type'
              name='type'
              value={selectedType}
              onChange={handleTypeChange}>

              <option value='all'>All</option>
              <option value='DONATION'>Donation</option>
              <option value='FINANCIAL ASSISTANCE'>Financial Assistance</option>
            </select>
          </div>
          {activeComponent === 'new' && <New inquiries={displayedInquiries.filter(displayedInquiry => displayedInquiry.respondedFlag === false)} />}
          {activeComponent === 'done' && <Done inquiries={displayedInquiries.filter(displayedInquiry => displayedInquiry.respondedFlag === true)} />}
        </div>
      </div>
    </div>
  )
}

export default DonationsPage