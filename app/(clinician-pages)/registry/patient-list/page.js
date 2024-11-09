'use client';

import {React, useState, useEffect} from 'react'
import Navbar from '@/components/navbarLanding'
import { useRouter } from 'next/navigation';
import './patient-list.css'

function page() {

    const [patientsData, setPatientsData] = useState([]);

    const router = useRouter();

    useEffect(()=> {
    
        const fetchPatientsData = async () => {
    
          try {
            const response = await fetch("http://localhost:8080/patient/get-all");
            const responseData = await response.json();
            setPatientsData(responseData);
          } catch (error) {
            console.log("Error fetching patient data: ", error);
          }
          
        };
    
        fetchPatientsData();
    }, []);

    const handleViewPatientRecord = (patientCode) => {
        localStorage.setItem('view_patientCode', patientCode);
        router.push("/registry/view-record");
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='title'> Patient List </div>
            <div className='p-table'>
                <table >
                <thead>
                    <tr>
                    <th>Patient Code</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Disease</th>
                    <th>Variant</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    patientsData.map((patient, index) => {
                        return (
                        <tr key={index}>
                            <td>{patient.patientCode}</td>
                            <td>{patient.firstName}</td>
                            <td>{patient.lastName}</td>
                            <td>{patient.diagnosis}</td>
                            <td>{patient.variant}</td>
                            <td>
                            <button onClick={()=>handleViewPatientRecord(patient.patientCode)}>
                                View Patient Data
                            </button>
                            </td>
                        </tr>
                        )
                    })
                    }
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default page