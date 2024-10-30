import React, { useState, useEffect } from 'react';
import './registryForm.css';
import regionsData from './../philippine_provinces_cities_municipalities_and_barangays_2019v2.json';

const RegistryForm = () => {

  const regions = [
    "CAR", "NCR", "Region I", "Region II", "Region III", "Region IV-A", "Region IV-B", 
    "Region V", "Region VI", "Region VII", "Region VIII", "Region IX", 
    "Region X", "Region XI", "Region XII", "Region XIII", "BARMM"
  ];

  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [barangays, setBarangays] = useState([]);

  const [formData, setFormData] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    age: '',
    sex: '',
    birthday: '',
    address: '',
    region: '',
    province:'',
    city: '',
    barangay: '',
    marital_status: '',
    chief_complaint: '',
    blur_duration: '',
    laterality: '',
    family_member: '',
    sibling_count: 0,
    erg_date: '',
    erg_result: '',
    diagnosis: '',
    variant: '',
    gen_test_date: '',
    right_bcva: '',
    left_bcva: '',
    right_cornea: '',
    left_cornea: '',
    right_retina: '',
    left_retina: ''
  });

  const [variantOptions, setVariantOptions] = useState([]);

  useEffect(() => {
    // Make a GET request to the server
    fetch('http://localhost:8080/patient/getLatestID', {
      method: 'GET',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);

      let id = data;
      let next_id = data + 1;

      next_id = next_id.toString().padStart(4, '0')
      const patientCode = `2024${next_id}`;
  
      // Update the form data to include the patient code
      setFormData(prevFormData => ({
        ...prevFormData,
        patient_code: patientCode,
      }));
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle errors here
    });
  }, []);
  

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

  useEffect(() => {
    // Get the provinces for the selected region
    if(formData.region !== ''){
      const provinceList = regionsData[formData.region].province_list;
      setProvinces(Object.keys(provinceList));
    }
    
  }, [formData.region]);

  useEffect(() => {
    // Get the provinces for the selected region
    if(formData.region !== '' && formData.province !== ''){
      const cityList = regionsData[formData.region].province_list[(formData.province).toUpperCase()].municipality_list;
      setCities(Object.keys(cityList));
    }

  }, [formData.province]);

  useEffect(() => {
    // Get the provinces for the selected region
    if(formData.region !== '' && formData.province !== '' && formData.city!==''){
      const barangayList = regionsData[formData.region].province_list[(formData.province).toUpperCase()].municipality_list[(formData.city).toUpperCase()].barangay_list;
      setBarangays(barangayList);
    }
    
  }, [formData.city]);

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
    if (name === 'sibling_count') {
      setFormData(prevFormData => ({ ...prevFormData, [name]: Number(value) }));
    } else {
      setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    }

  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //Make a POST request to the server
    fetch('http://localhost:8080/patient/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      // You can handle successful submission here
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle errors here
    });

    // Create the form data based on the conditions provided
    const userData = {
      username: formData.patient_code,
      user_password: `${formData.first_name}${formData.last_name}`.toLowerCase().replace(/\s+/g, ''),
      user_role: "PATIENT"
    };

    //Make a POST request to the server
    fetch('http://localhost:8080/user/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      // You can handle successful submission here
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle errors here
    });
    
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
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </div>    
              <div className='field-container'>
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </div>         
              <div className='field-container'>
                <label htmlFor="middle_name">Middle Name</label>
                <input
                  type="text"
                  id="middle_name"
                  name="middle_name"
                  value={formData.middle_name}
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
                <label htmlFor="sex">Sex at birth</label>
                <select 
                  id='sex'
                  name='sex'
                  value={formData.sex}
                  onChange={handleChange}
                  required
                  >
                  <option></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className='field-container'>
                <label htmlFor='marital_status'>Marital Status</label>
                <select 
                  id='marital_status'
                  name='marital_status'
                  value={formData.marital_status}
                  onChange={handleChange}
                  aria-placeholder='Select'
                  required
                  >
                  <option value="" disabled></option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Divorced">Divorced</option>
                </select>
              </div>    
            </div>
            <div className='row-container'>
              <div className='field-container'>
                <label htmlFor='address'>Address (Lot Number, Street, Subdivision)</label>
                <textarea className="textArea" 
                                    id='address'
                                    name='address'
                                    value={formData.address}
                                    onChange={handleChange}
                                    required>
                  </textarea>
              </div>                
            </div>
            <div className='row-container'>
              <div className='field-container'>
                <label htmlFor='region'>Region</label>
                <select 
                  id='region'
                  name='region'
                  value={formData.region}
                  onChange={handleChange}
                  required>
                  <option value="" disabled></option>
                  {regions.map((region, index) => (
                    <option key={index} value={region}>{region}</option>
                  ))}
                </select>
              </div>
              <div className='field-container'>
                <label htmlFor='province'>Province</label>
                <select 
                  id='province'
                  name='province'
                  value={formData.province}
                  onChange={handleChange}
                  required>
                  <option value="" disabled></option>
                  {provinces.map((province, index) => (
                    <option key={index} value={province}>{province}</option>
                  ))}
                </select>
              </div>
              <div className='field-container'>
                <label htmlFor='city'>City</label>
                <select 
                  id='city'
                  name='city'
                  value={formData.city}
                  onChange={handleChange}
                  required>
                  <option value="" disabled></option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                  ))}
                </select>
              </div>
              <div className='field-container'>
                <label htmlFor='barangay'>Barangay</label>
                <select 
                  id='barangay'
                  name='barangay'
                  value={formData.barangay}
                  onChange={handleChange}
                  required>
                  <option value="" disabled></option>
                  {barangays.map((barangay, index) => (
                    <option key={index} value={barangay}>{barangay}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>  

          {/* Target 2: Clinical History */}
          <div id="target2" className='target'>
            <label className="regSectionName">Clinical History</label>
            <div className='row-container'>
              <div className='field-container'>
                <label htmlFor='chief_complaint'>Chief Complaint</label>
                <textarea className="textArea" 
                          id='chief_complaint'
                          name='chief_complaint'
                          value={formData.chief_complaint}
                          onChange={handleChange}
                          required>
                          </textarea>
              </div>
            </div>
            <div className='row-container'>
              <div className='field-container'>
                <label htmlFor='laterality'>For which eye?</label>
                <select 
                  id='laterality'
                  name='laterality'
                  value={formData.laterality}
                  onChange={handleChange}
                  required>
                  <option></option>
                  <option value="Right">Right</option>
                  <option value="Left">Left</option>
                  <option value="Both">Both</option>
                </select>
              </div>
              <div className='field-container'>
                <label htmlFor='blur_duration'>For how long?</label>
                <select 
                  id='blur_duration'
                  name='blur_duration'
                  value={formData.blur_duration}
                  onChange={handleChange}
                  required>
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
                <label htmlFor='family_member'>Member/s of the Family with the same disease or history of blindness or blurring of vision</label>
                <select 
                  id='family_member'
                  name='family_member'
                  value={formData.family_member}
                  onChange={handleChange}
                  required>
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
                <label htmlFor='sibling_count'>How many siblings have the same disease or history of blindness or blurring of vision?</label>
                <input type="number" min="0" 
                  id='sibling_count'
                  name='sibling_count'
                  value={formData.sibling_count}
                  onChange={handleChange}
                  required />
              </div>
            </div>
          </div>

          {/* Target 4: Diagnostic */}
          <div id="target4" className='target'>
            <label className="regSectionName">Diagnostic</label>
            <div className='row-container'>
              <div className='field-container'>
                <label htmlFor='erg_date'>ERG Date</label>
                <input type="date" 
                  id='erg_date'
                  name='erg_date'
                  value={formData.erg_date}
                  onChange={handleChange}
                  required />
              </div>
              <div className='field-container'>
                <label htmlFor='erg_result'>ERG Result</label>
                <select 
                  id='erg_result'
                  name='erg_result'
                  value={formData.erg_result}
                  onChange={handleChange}
                  required>
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
                <label htmlFor='diagnosis'>Diagnosis</label>
                <select name="diagnosis" value={formData.diagnosis} onChange={handleChange} required>
                  <option value="">Select Diagnosis</option>
                  <option value="Retinitis Pigmentosa">Retinitis Pigmentosa</option>
                  <option value="Stargardt Disease">Stargardt Disease</option>
                  <option value="Cone Rod Dystrophy">Cone Rod Dystrophy</option>
                </select>
              </div>
              <div className='field-container'>
                <label htmlFor='variant'>Variants</label>
                <select id='variant' name="variant" value={formData.variant} onChange={handleChange} required>
                  <option value="">Select Variant</option>
                  {variantOptions.map((variant, index) => (
                    <option key={index} value={variant}>{variant}</option>
                  ))}
                </select>
              </div>
              <div className='field-container'>
                <label htmlFor='gen_test_date'>Genetic Testing Date Performed</label>
                <input type="date" name="gen_test_date" value={formData.gen_test_date} onChange={handleChange} required />
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
                      <select 
                        id='right_bcva'
                        name='right_bcva'
                        value={formData.right_bcva}
                        onChange={handleChange}
                        required>
                        <option value="">Select</option>
                        <option value="20/20">20/20</option>
                        <option value="20/40">20/40</option>
                        <option value="20/60">20/60</option>
                        <option value="20/80">20/80</option>
                        <option value="20/100">20/100</option>
                      </select>
                    </td>
                    <td>
                      <select 
                        id='left_bcva'
                        name='left_bcva'
                        value={formData.left_bcva}
                        onChange={handleChange}
                        required>
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
                      <select 
                        id='right_cornea'
                        name='right_cornea'
                        value={formData.right_cornea}
                        onChange={handleChange}
                        required>
                        <option value="Normal">Normal</option>
                        <option value="Abnormal">Abnormal</option>
                      </select>
                    </td>
                    <td>
                      <select 
                        id='left_cornea'
                        name='left_cornea'
                        value={formData.left_cornea}
                        onChange={handleChange}
                        required>
                        <option value="Normal">Normal</option>
                        <option value="Abnormal">Abnormal</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Retina</td>
                    <td>
                      <select 
                        id='right_retina'
                        name='right_retina'
                        value={formData.right_retina}
                        onChange={handleChange}
                        required>
                        <option value="Normal">Normal</option>
                        <option value="Abnormal">Abnormal</option>
                      </select>
                    </td>
                    <td>
                      <select 
                        id='left_retina'
                        name='left_retina'
                        value={formData.left_retina}
                        onChange={handleChange}
                        required>
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
