import React from 'react'
import './registryForm.css'

const registryForm = () => {
  return (
    <div>
      <div className='form-step'>
        <form>
          <div id="target1" className='target'>
            <label className="regSectionName">Demographics</label>
            <div className='row-container'>
              <div className='field-container'>
                <label>Last Name</label>
                <input type='text'/>
              </div>    
              <div className='field-container'>
                <label>First Name</label>
                <input type='text'/>
              </div>         
              <div className='field-container'>
                <label>Middle Name</label>
                <input type='text'/>
              </div>     
            </div>
            <div className='row-container'>
              <div className='field-container'>
                <label>Birthday</label>
                <input type='date'/>
              </div>    
              <div className='field-container'>
                <label>Age</label>
                <input type='text'disabled/>
              </div>         
              <div className='field-container'>
                <label>Sex at birth</label>
                <select>
                  <option></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className='field-container'>
                <label>Marital Status</label>
                <select>
                  <option value="Male">Single</option>
                  <option value="Female">Married</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Divorced">Divorced</option>
                </select>
              </div>    
            </div>
            <div className='row-container'>
              <div className='field-container'>
                <label>Address(Street, Barangay)</label>
                <textarea className="textArea"></textarea>
              </div>                
            </div>
            <div className='row-container'>
            <div className='field-container'>
                <label>Region</label>
                  <select>
                    <option value="Region1">Region I</option>
                    <option value="Region1">Region II</option>
                    <option value="Region1">Region III</option>
                    <option value="Region1">Region IV-A</option>
                    <option value="Region1">Region IV-B</option>
                    <option value="Region1">Region V</option>
                    <option value="Region1">Region VI</option>
                    <option value="Region1">Region VII</option>
                    <option value="Region1">Region VIII</option>
                    <option value="Region1">Region IX</option>
                    <option value="Region1">Region X</option>
                    <option value="Region1">Region XI</option>
                    <option value="Region1">Region XII</option>
                    <option value="Region1">Region XIII</option>
                    <option value="Region1">NCR</option>
                    <option value="Region1">CAR</option>
                    <option value="Region1">BARMM</option>
                  </select>
              </div>
              <div className='field-container'>
                <label>Province</label>
                <select>
                  <option value="Manila">Metro Manila</option>
                  <option value="Cavite">Cavite</option>
                </select>
              </div>
              <div className='field-container'>
                <label>City</label>
                <select>
                  <option value="Manila">Manila</option>
                  <option value="Cavite">Bacoor</option>
                </select>
              </div>
            </div>
          </div>
          <div id="target2" className='target'>
          <label className="regSectionName">Clinical History</label>
            <div className='row-container'>
              <div className='field-container'>
                <label>Chief Complaint</label>
                <textarea className="textArea"></textarea>
              </div>
            </div>
            <div className='row-container'>
              <div className='field-container'>
                <label>For which eye?</label>
                <select>
                  <option value="Right">Right</option>
                  <option value="Left">Left</option>
                </select>
              </div>
              <div className='field-container'>
                <label>For how long?</label>
                <select>
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
          <div id="target3" className='target'>
          <label className="regSectionName">Family History</label>
            <div className='row-container'>
              <div className='field-container'>
                <label>Member/s of the Family with the same disease of history of blindness or blurring of vision</label>
                <select>
                  <option>None</option>
                  <option>Grandfather</option>
                  <option>GrandMother</option>
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
                <input type='text'></input>
              </div>
            </div>
          </div>
          <div id="target4" className='target'>
            <label className="regSectionName">Diagnostic</label>
            <div className='row-container'>
              <div className='field-container'>
                <label>ERG Date</label>
                <input type='date'></input>
              </div>
              <div className='field-container'>
                <label>ERG Result</label>
                <select>
                  <option>Normal Result</option>
                  <option>Decreased a wave</option>
                  <option>Decreased b wave</option>
                  <option>Decreased a and b wave</option>
                  <option>Normal Result</option>
                </select>
              </div>
            </div>
          </div>
          <div id="target5" className='target'>
          <label className="regSectionName">Diagnosis</label>
            <div className='row-container'>
              <div className='field-container'>
                <label>Diagnosis</label>
                <select>
                  <option>Retinitis Pigmentosa</option>
                  <option>Stargardt Disease</option>
                  <option>Cone Rod Dystophy</option>
                </select>
              </div>
              <div className='field-container'>
                <label>Variants</label>
                <select>
                  <option>RLBP1</option>
                  <option>RP1</option>
                  <option>RHO</option>
                  <option>RP4</option>
                  <option>RPE65</option>
                  <option>STGD2</option>
                  <option>STGD3</option>
                  <option>STDG4</option>
                  <option>CNGA3</option>
                  <option>ABCA4</option>
                </select>
              </div>
              <div className='field-container'>
                <label>Genetic Testing Date Performed</label>
                <input type='date'></input>
              </div>
            </div>
          </div>
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
              <select>
                <option value="">Select</option>
                <option value="20/20">20/20</option>
                <option value="20/40">20/40</option>
                <option value="20/60">20/60</option>
                <option value="20/80">20/80</option>
                <option value="20/100">20/100</option>
              </select>
            </td>
            <td>
              <select>
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
              <select>
                <option value="">Select</option>
                <option value="Normal">Normal</option>
                <option value="Abnormal">Abnormal</option>
              </select>
            </td>
            <td>
              <select>
                <option value="">Select</option>
                <option value="Normal">Normal</option>
                <option value="Abnormal">Abnormal</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Retina</td>
            <td>
              <select>
                <option value="">Select</option>
                <option value="Normal">Normal</option>
                <option value="Abnormal">Abnormal</option>
              </select>
            </td>
            <td>
              <select>
                <option value="">Select</option>
                <option value="Normal">Normal</option>
                <option value="Abnormal">Abnormal</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default registryForm