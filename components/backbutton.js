'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './backButton.css';

const BackButton = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <button className="back-button" onClick={handleBackClick}>
      ← Back
    </button>
  );
};

export default BackButton;