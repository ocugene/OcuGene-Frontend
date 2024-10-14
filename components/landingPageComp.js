'use client';

import React from 'react'
import { useRouter } from 'next/navigation';
import './landingPageComp.css';

const landingPage = () => {
  const router = useRouter();

  const navigateToFamilies = () => {
    router.push('/families')
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
                  <button className="card-button" onClick={navigateToFamilies}>Donate Registry</button>
                </div>
                <div className="col-container">
                  <button className="card-button" onClick={navigateToFamilies}>Support Group</button>
                </div>
                <div className="col-container">
                  <button className="card-button" onClick={navigateToFamilies}>Financial Assistance</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default landingPage