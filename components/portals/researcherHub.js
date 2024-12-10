'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './home.css';

const ResearcherHub = () => {

  const router = useRouter();

  const navigateToRDatabase = () => {
    router.push('/researchers-hub/r-database');
  };

  const navigateToPDatabase = () => {
    router.push('/researchers-hub/p-database');
  };

  return (
    <div className="landing-page">
        <div className='title'>Researcher&apos;s Hub</div>
        <div className="row-container-portal">
          <div className="col-container">
            <div className="category-col-container">
              <div className="category-header">
                <label>Administrative Tasks</label>
              </div>
              <div className="row-container-card-holder">
                <div className="col-container">
                  <button className="card-button" onClick={navigateToRDatabase} data-info="View Ocular Genetics' Current Analytics">
                    <div className="card-btn-title"><span>Registry Database</span></div>
                  </button>
                </div>
                <div className="col-container">
                  <button className="card-button" onClick={navigateToPDatabase} data-info="Download Ocular Genetics Dataset">
                    <div className="card-btn-title"><span>Patient Database</span></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ResearcherHub