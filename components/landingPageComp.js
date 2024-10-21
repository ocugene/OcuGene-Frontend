'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './landingPageComp.css';

const landingPage = () => {
  const router = useRouter();

  const navigateToFamilies = () => {
    router.push('/families');
  };

  return (
    <div>
      <div className="landing-page">
        <div className='title'>Welcome!</div>
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
                  <button className="card-button" onClick={navigateToFamilies} data-info="Inquire on how to donate to the registry.">
                    <div className="card-btn-title"><span>Donate to Registry</span></div>
                  </button>
                </div>
                <div className="col-container">
                  <button className="card-button" onClick={navigateToFamilies} data-info="Learn more about the activities.">
                    <div className="card-btn-title"><span>Support Group</span></div>
                  </button>
                </div>
                <div className="col-container">
                  <button className="card-button" onClick={navigateToFamilies} data-info="Inquire on how to seek financial assistance.">
                    <div className="card-btn-title"><span>Financial Assistance</span></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landingPage;
