'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './landingPageComp.css';

const LandingPage = () => {
  const router = useRouter();

  const navigateToFamilies = (activeButton) => {
    // Navigate to /families with a query parameter
    router.push(`/families?active=${activeButton}`);
  };

  return (
    <div>
      <div className="landing-page">
        <div className="row-container">
          <div className="col-container">
            <div className="category-col-container">
              <div className="category-header">
                <label>Basic Information</label>
              </div>
              <div className="row-container">
                <div className="col-container">
                  <button className="card-button">Disease 1</button>
                </div>
                <div className="col-container">
                  <button className="card-button">Disease 2</button>
                </div>
                <div className="col-container">
                  <button className="card-button">Disease 3</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-container">
            <div className="category-col-container">
              <div className="category-header">
                <label>Families</label>
              </div>
              <div className="row-container">
                <div className="col-container">
                  <button className="card-button" onClick={() => navigateToFamilies('donate')}>Donate Registry</button>
                </div>
                <div className="col-container">
                  <button className="card-button" onClick={() => navigateToFamilies('support')}>Support Group</button>
                </div>
                <div className="col-container">
                  <button className="card-button" onClick={() => navigateToFamilies('financial')}>Financial Assistance</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
