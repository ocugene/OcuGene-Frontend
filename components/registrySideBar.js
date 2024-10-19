import React, { useState } from 'react';
import './registrySideBar.css';

const steps = [
    { number: '1', label: 'Demographics', target: 'target1' },
    { number: '2', label: 'Clinical History', target: 'target2' },
    { number: '3', label: 'Family History', target: 'target3' },
    { number: '4', label: 'Diagnostic', target: 'target4' },
    { number: '5', label: 'Diagnosis', target: 'target5' },
    { number: '6', label: 'Clinical Examination', target: 'target6' }
];

const registrySideBar = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const goToStep = (step) => {
        setCurrentStep(step);
        const targetElement = document.getElementById(`target${step + 1}`);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <div>
            <div className="progress-tracker">
            {steps.map((step, index) => (
                    <div
                    key={index}
                    className={`step-container ${currentStep === index ? 'active' : ''}`}
                    onClick={() => goToStep(index)}
                    >
                    <div className="step">{step.number}</div>
                    <div className="label">{step.label}</div>
                    </div>
            ))}
            </div>
        </div>
  )
}

export default registrySideBar