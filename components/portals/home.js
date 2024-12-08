'use client';

import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import './home.css';

const landingPage = () => {

  const [showMessage, setShowMessage] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const router = useRouter();

  useEffect(() => {

    if(typeof window !== null){
      // Show the message and start the fade-in animation
      setShowMessage(localStorage.getItem('signup_success') === 'true');

      // Hide the message after 4 seconds, start fade-out animation
      const fadeOutTimer = setTimeout(() => {
        setIsVisible(false);
        localStorage.setItem('signup_success', 'false'); // After fade-out, remove the component from DOM
      }, 4000); // Keep the message for 4 seconds before fading out

      return () => clearTimeout(fadeOutTimer); // Cleanup the timer when component unmounts
    }
    
  }, []);

  const navigateToFamilies = () => {
    router.push('/families');
  };

  return (
    <div className="land">
      {isVisible && showMessage && (
        <div className='success-indicator'>
          Sign up success! An email will be sent to you once the admin has approved your account.
        </div>
      )}
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
                  <button className="card-button" 
                  data-info="A group of rare, genetic disorders that involve a breakdown and loss of cells in the retina. (Click to know more)"
                  onClick={() => window.location.href = 'https://www.aao.org/eye-health/diseases/what-is-retinitis-pigmentosa?fbclid=IwZXh0bgNhZW0CMTEAAR2tr2VyykYqHeLeRvaevsiG6HZosHw6HwFlmQsyVUxbV_RLqQwXFvCkklc_aem_vwycSXvPYevCsIJbEwwQnQ'}>
                    <div className="card-btn-title"><span>Retinitis Pigmentosa</span></div>
                  </button>
                </div>
                <div className="col-container">
                  <button className="card-button" 
                  data-info="An inherited disorder of the retina, causing progressive vision loss. (Click to know more)"
                  onClick={() => window.location.href = 'https://www.aao.org/eye-health/diseases/what-is-stargardt-disease?fbclid=IwZXh0bgNhZW0CMTEAAR3s8oRKiuT2kiuj-FeVbytxSJIpk9iP9ZRXrpf0HcF86CYmu_80mlcgwc0_aem_m-_-BKHUdnytx8b8OV1LOg'}>
                    <div className="card-btn-title"><span>Stargardts' Disease</span></div>
                  </button>
                </div>
                <div className="col-container">
                  <button className="card-button" 
                  data-info="A rare disorder that affects the cones and rods in the retina, leading to vision loss over time. (Click to know more)"
                  onClick={() => window.location.href = 'https://my.clevelandclinic.org/health/diseases/cone-rod-dystrophy'}>
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
                    <div className="card-btn-title"><span>Support Activities</span></div>
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
