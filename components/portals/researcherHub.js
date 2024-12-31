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
                  <button className="card-button" 
                  data-info="Acta Medica Philippina is a monthly open-access, peer-reviewed medical and health science journal published by the University of the Philippines Manila. (Click to know more)"
                  onClick={() => window.open('https://actamedicaphilippina.upm.edu.ph/index.php/acta/issue/view/277?fbclid=IwZXh0bgNhZW0CMTEAAR3fBedsGnI8TB7VxOfKh2rX_raz268nt5Ggo7Eh7AxdYrUi-eT_f8jEm8I_aem_Z82ath8C-D7cLZurJuzSAA') }>
                    <div className="card-btn-title"><span>Acta Medica Philippina</span></div>
                  </button>
                </div>
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