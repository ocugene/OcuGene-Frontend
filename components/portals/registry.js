'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './home.css';

const Registry = () => {

  const router = useRouter();

  const navigateToNew = () => {
    router.push('/registry/new-record');
  };

  const navigateToView = () => {
    router.push('/registry/patient-list');
  };

  return (
    <div className="landing-page">
        <div className='title'>Registry</div>
        <div className="row-container">
          <div className="col-container">
            <div className="category-col-container">
              <div className="category-header">
                <label>Navigate</label>
              </div>
              <div className="row-container-card-holder">
                <div className="col-container">
                  <button className="card-button" onClick={navigateToNew} data-info="Add New Record to the registry">
                    <div className="card-btn-title"><span>Add New Record</span></div>
                  </button>
                </div>
                <div className="col-container">
                  <button className="card-button" onClick={navigateToView} data-info="View Existing Patient Record">
                    <div className="card-btn-title"><span>View Existing Record</span></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Registry