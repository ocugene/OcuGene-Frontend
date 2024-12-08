import {React, useState} from 'react';
import './consentFormModal.css'

function ConsentFormModal({onClose, formData, handleSubmit}) {

    const [signature, setSignature] = useState('');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const targetSignature = (formData.first_name + " " + formData.middle_name + " " + formData.last_name).toUpperCase();

    const handleChange = (e) =>{
        const newSignature = e.target.value;
        setSignature(newSignature);
        if(newSignature === targetSignature){
            setIsSubmitDisabled(false);
        }
        else{
            setIsSubmitDisabled(true);
        }
    }

    return (
        <div className="consent-modal">
            <div className="consent-modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <h2 className="form-header">Consent to Data Usage</h2>
                <p className='consent-content1'>By signing below, you consent to the use of your data for storage and academic 
                    purposes by the Ocular Genetics Registry of the Philippines. Your information will be handled with 
                    confidentiality and used solely for research and educational advancements in ocular genetics.</p>

                <p className='consent-content2'>To sign, type in your full name in capital letters.</p>
                <div className='signature-container'>
                    <input type='text' onChange={handleChange}/>
                    <button className='submit-consent' disabled={isSubmitDisabled} onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConsentFormModal