'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './home.css';

const AdminPortal = () => {

  const router = useRouter();

  const navigateToDonation = () => {
    router.push('/admin-landing/db-inquiries');
  };

  const navigateToAccounts = () => {
    router.push('/admin-landing/db-accounts');
  };

  const navigateToSupport = () => {
    router.push('/admin-landing/db-support-acts');
  };

  return (
    <div className="landing-page">
        <div className='title'>Admin Portal</div>
        <div className="row-container-portal">
          <div className="col-container">
            <div className="category-col-container">
              <div className="category-header">
                <label>ADMINISTRATIVE TASKS</label>
              </div>
              <div className="row-container-card-holder">
                <div className="col-container">
                  <button className="card-button" onClick={navigateToDonation} data-info="Manage Inquiries">
                    <div className="card-btn-title"><span>Manage Inquiries</span></div>
                  </button>
                </div>
                <div className="col-container">
                  <button className="card-button" onClick={navigateToAccounts} data-info="Manage Account Requests">
                    <div className="card-btn-title"><span>Account Requests</span></div>
                  </button>
                </div>
                <div className="col-container">
                  <button className="card-button" onClick={navigateToSupport} data-info="Manage Support Activities and Events">
                    <div className="card-btn-title"><span>Support Activities</span></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AdminPortal