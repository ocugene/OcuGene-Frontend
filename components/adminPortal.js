'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './landingPageComp.css';

const adminPortal = () => {

  const router = useRouter();

  const navigateToDonation = () => {
    router.push('/admin-landing/db-donation');
  };

  const navigateToFinance = () => {
    router.push('/admin-landing/db-fin-asst');
  };

  const navigateToSupport = () => {
    router.push('/admin-landing/db-support-acts');
  };

  return (
    <div className="landing-page">
        <div className='title'>Admin Portal</div>
        <div className="row-container">
          <div className="col-container">
            <div className="category-col-container">
              <div className="category-header">
                <label>Basic Information</label>
              </div>
              <div className="row-container">
                <div className="col-container">
                  <button className="card-button" data-info="A group of rare, genetic disorders that involve a breakdown and loss of cells in the retina.">
                    <div className="card-btn-title"><span>Retinitis Pigmentosa</span></div>
                  </button>
                </div>
                <div className="col-container">
                  <button className="card-button" data-info="An inherited disorder of the retina, causing progressive vision loss.">
                    <div className="card-btn-title"><span>Stargardts' Disease</span></div>
                  </button>
                </div>
                <div className="col-container">
                  <button className="card-button" data-info="A rare disorder that affects the cones and rods in the retina, leading to vision loss over time.">
                    <div className="card-btn-title"><span>Cone-Rod Dystrophy</span></div>
                  </button>
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
                  <button className="card-button" onClick={navigateToDonation} data-info="Manage Donation Registry">
                    <div className="card-btn-title"><span>Donate Registry</span></div>
                  </button>
                </div>
                <div className="col-container">
                  <button className="card-button" onClick={navigateToFinance} data-info="Manage Financial Assistance Inquiries">
                    <div className="card-btn-title"><span>Financial Assistance</span></div>
                  </button>
                </div>
                <div className="col-container">
                  <button className="card-button" onClick={navigateToSupport} data-info="Mange Support Activities and Events">
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

export default adminPortal