import React, { useState, useEffect } from 'react';
import './registryForm.css'

const RegistryForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    birthday: '',
    age: '',
    diagnosis: '',
    variant: '',
    geneticTestingDate: '',
  });

  const [variantOptions, setVariantOptions] = useState([]);

  useEffect(() => {
    if (formData.birthday) {
      const age = calculateAge(formData.birthday);
      setFormData({ ...formData, age });
    }
  }, [formData.birthday]);

  useEffect(() => {
    let options = [];
    if (formData.diagnosis === 'Retinitis Pigmentosa') {
      options = ['RLBP1', 'RP1', 'RHO', 'RP4', 'RPE65'];
    } else if (formData.diagnosis === 'Stargardt Disease') {
      options = ['STGD2', 'STGD3', 'STGD4'];
    } else if (formData.diagnosis === 'Cone Rod Dystrophy') {
      options = ['CNGA3', 'ABCA4'];
    }
    setVariantOptions(options);
  }, [formData.diagnosis]);

  const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div className='form-step'>
        <form onSubmit={handleSubmit}>
          {/* Target 1: Demographics */}
          <div id="target1" className='target'>
            <label className="regSectionName">Demographics</label>
            <div className='row-container'>
              <div className='field-container'>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>    
              <div className='field-container'>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>         
              <div className='field-container'>
                <label htmlFor="middleName">Middle Name</label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                />
              </div>     
            </div>
            <div className='row-container'>
              <div className='field-container'>
                <label htmlFor="birthday">Birthday</label>
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  required
                />
              </div>    
              <div className='field-container'>
                <label htmlFor="age">Age</label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  value={formData.age}
                  readOnly
                />
              </div>         
              <div className='field-container'>
                <label>Sex at birth</label>
                <select required>
                  <option></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className='field-container'>
                <label>Marital Status</label>
                <select required>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Divorced">Divorced</option>
                </select>
              </div>    
            </div>
            <div className='row-container'>
              <div className='field-container'>
                <label>Address(Street, Barangay)</label>
                <textarea className="textArea" required></textarea>
              </div>                
            </div>
            <div className='row-container'>
              <div className='field-container'>
                <label>Region</label>
                <select required>
                  <option value="Region I">Region I</option>
                  <option value="Region II">Region II</option>
                  <option value="Region III">Region III</option>
                  <option value="Region IV-A">Region IV-A</option>
                  <option value="Region IV-B">Region IV-B</option>
                  <option value="Region V">Region V</option>
                  <option value="Region VI">Region VI</option>
                  <option value="Region VII">Region VII</option>
                  <option value="Region VIII">Region VIII</option>
                  <option value="Region IX">Region IX</option>
                  <option value="Region X">Region X</option>
                  <option value="Region XI">Region XI</option>
                  <option value="Region XII">Region XII</option>
                  <option value="Region XIII">Region XIII</option>
                  <option value="NCR">NCR</option>
                  <option value="CAR">CAR</option>
                  <option value="BARMM">BARMM</option>
                </select>
              </div>
              <div className='field-container'>
                <label>Province</label>
                <select required>
                  <option value="Metro Manila">Metro Manila</option>
                  <option value="Cavite">Cavite</option>
                </select>
              </div>
              <div className='field-container'>
                <label>City</label>
                <select required>
                  <option value="Manila">Manila</option>
                  <option value="Bacoor">Bacoor</option>
                </select>
              </div>
            </div>
          </div>

          {/* Target 2: Clinical History */}
          <div id="target2" className='target'>
            <label className="regSectionName">Clinical History</label>
            <div className='row-container'>
              <div className='field-container'>
                <label>Chief Complaint</label>
                <textarea className="textArea" required></textarea>
              </div>
            </div>
            <div className='row-container'>
              <div className='field-container'>
                <label>For which eye?</label>
                <select required>
                  <option></option>
                  <option value="Right">Right</option>
                  <option value="Left">Left</option>
                </select>
              </div>
              <div className='field-container'>
                <label>For how long?</label>
                <select required>
                  <option>less than 6 months</option>
                  <option>6-12 months</option>
                  <option>2 years</option>
                  <option>3 years</option>
                  <option>4 years</option>
                  <option>5 years</option>
                  <option>6 years</option>
                  <option>7 years</option>
                  <option>8 years</option>
                  <option>9 years</option>
                  <option>10 years</option>
                  <option>More than 10 years</option>
                </select>
              </div>
            </div>
          </div>

          {/* Target 3: Family History */}
          <div id="target3" className='target'>
            <label className="regSectionName">Family History</label>
            <div className='row-container'>
              <div className='field-container'>
                <label>Member/s of the Family with the same disease or history of blindness or blurring of vision</label>
                <select required>
                  <option>None</option>
                  <option>Grandfather</option>
                  <option>Grandmother</option>
                  <option>Father</option>
                  <option>Mother</option>
                  <option>Uncle</option>
                  <option>Aunt</option>
                  <option>Brother</option>
                  <option>Sister</option>
                </select>
              </div>
            </div>
            <div className='row-container'>
              <div className='field-container'>
                <label>How many siblings have the same disease or history of blindness or blurring of vision?</label>
                <input type="number" min="0" required />
              </div>
            </div>
          </div>

          {/* Target 4: Diagnostic */}
          <div id="target4" className='target'>
            <label className="regSectionName">Diagnostic</label>
            <div className='row-container'>
              <div className='field-container'>
                <label>ERG Date</label>
                <input type="date" name="ergDate" required />
              </div>
              <div className='field-container'>
                <label>ERG Result</label>
                <select required>
                  <option>Normal Result</option>
                  <option>Decreased a wave</option>
                  <option>Decreased b wave</option>
                  <option>Decreased a and b wave</option>
                </select>
              </div>
            </div>
          </div>

          {/* Target 5: Diagnosis */}
          <div id="target5" className='target'>
            <label className="regSectionName">Diagnosis</label>
            <div className='row-container'>
              <div className='field-container'>
                <label>Diagnosis</label>
                <select name="diagnosis" value={formData.diagnosis} onChange={handleChange} required>
                  <option value="">Select Diagnosis</option>
                  <option value="Retinitis Pigmentosa">Retinitis Pigmentosa</option>
                  <option value="Stargardt Disease">Stargardt Disease</option>
                  <option value="Cone Rod Dystrophy">Cone Rod Dystrophy</option>
                </select>
              </div>
              <div className='field-container'>
                <label>Variants</label>
                <select name="variant" value={formData.variant} onChange={handleChange} required>
                  <option value="">Select Variant</option>
                  {variantOptions.map((variant, index) => (
                    <option key={index} value={variant}>{variant}</option>
                  ))}
                </select>
              </div>
              <div className='field-container'>
                <label>Genetic Testing Date Performed</label>
                <input type="date" name="geneticTestingDate" value={formData.geneticTestingDate} onChange={handleChange} required />
              </div>
            </div>
          </div>

          {/* Target 6: Clinical Examination */}
          <div id="target6" className='target'>
            <label className="regSectionName">Clinical Examination</label>
            <div className='row-container'>
              <table className="clinical-exam-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Right Eye</th>
                    <th>Left Eye</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Best Corrected Visual Acuity</td>
                    <td>
                      <select required>
                        <option value="">Select</option>
                        <option value="20/20">20/20</option>
                        <option value="20/40">20/40</option>
                        <option value="20/60">20/60</option>
                        <option value="20/80">20/80</option>
                        <option value="20/100">20/100</option>
                      </select>
                    </td>
                    <td>
                      <select required>
                        <option value="">Select</option>
                        <option value="20/20">20/20</option>
                        <option value="20/40">20/40</option>
                        <option value="20/60">20/60</option>
                        <option value="20/80">20/80</option>
                        <option value="20/100">20/100</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Cornea</td>
                    <td>
                      <select required>
                        <option value="Normal">Normal</option>
                        <option value="Abnormal">Abnormal</option>
                      </select>
                    </td>
                    <td>
                      <select required>
                        <option value="Normal">Normal</option>
                        <option value="Abnormal">Abnormal</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Retina</td>
                    <td>
                      <select required>
                        <option value="Normal">Normal</option>
                        <option value="Abnormal">Abnormal</option>
                      </select>
                    </td>
                    <td>
                      <select required>
                        <option value="Normal">Normal</option>
                        <option value="Abnormal">Abnormal</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <button type="submit" className="registry-submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegistryForm;
