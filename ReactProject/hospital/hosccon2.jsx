
import React, { useState } from 'react';
import "./hosccon.css";
import { usePatientContext } from './hosccon';

const PatientManager = () => {
  const { patients, addPatient, deletePatient } = usePatientContext();
  const [patient, setPatient] = useState({ name: '', age: '', address: '', phone: '', condition: '' });

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    addPatient(patient);
    setPatient({ name: '', age: '', address: '', phone: '', condition: '' });
  };

  return (
    <div className='div1'>
      <section>
        <div className='se1' style={{ backgroundColor: "transparent", fontSize: "30px" }}>
          <center><h1 style={{ color: "black" }}>Add New Patient</h1></center>
        </div>

        <div className='se2'>
         
        <h2 style={{paddingLeft:"15px",color:"black"}}>Name:</h2>
          <input
            name="name"
            placeholder="Enter the Name"
            onChange={handleChange}
            value={patient.name}
            style={{
              padding: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginLeft:"10px",
              width: "95%",
            }}
          required/>
        </div>
          <br></br>
        <div>
        <h2 style={{paddingLeft:"15px",color:"black"}}>Age:</h2>
          <input
            name="age"
            placeholder="Enter the Age"
            onChange={handleChange}
            value={patient.age}
            style={{
              padding: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
               marginLeft:"10px",
              width: "95%"
            
            }}
          required/>
        </div>
          <br></br>
        <div>
        <h2 style={{paddingLeft:"15px",color:"black"}}>Address:</h2>
          <input
            name="address"
            placeholder="Enter the Address"
            onChange={handleChange}
            value={patient.address}
            style={{
              padding: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
               marginLeft:"10px",
              width: "95%"
            }}
           required />
        </div>
            <br></br>
        <div>
        <h2 style={{paddingLeft:"15px",color:"black"}}>Mobile Number:</h2>
          <input
            name="phone"
            placeholder="Enter the Mobile Number"
            onChange={handleChange}
            value={patient.phone}
            style={{
              padding: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginLeft:"10px",
              width: "95%"
            }}
            required/>
        </div>
            <br></br>
        <div>
        <h2 style={{paddingLeft:"15px",color:"black"}}>Condition:</h2>
          <input
            name="condition"
            placeholder="Enter the Condition"
            onChange={handleChange}
            value={patient.condition}
            style={{
              padding: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
               marginLeft:"10px",
              width: "95%"
            }}
            required/>
        </div>
            <br></br>
        <div>

        <center>
          <button onClick={handleSubmit} style={{
            padding: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginTop: "20px",
            width: "10%",
            fontSize: "20px",
            fontFamily: "serif",
            backgroundColor: "blue",
            color: "white"
          }}>Submit</button>
        </center>
</div>
        <div>
          <h3>Patient List</h3>
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "lightblue",
            fontSize: "18px"
          }}>
            <thead>
              <tr style={{ backgroundColor: "#0073e6", color: "white" }}>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Age</th>
                <th style={styles.th}>Address</th>
                <th style={styles.th}>Mobile Number</th>
                <th style={styles.th}>Condition</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} style={styles.tr}>
                  <td style={styles.td}>{patient.name}</td>
                  <td style={styles.td}>{patient.age}</td>
                  <td style={styles.td}>{patient.address}</td>
                  <td style={styles.td}>{patient.phone}</td>
                  <td style={styles.td}>{patient.condition}</td>
                  <td style={styles.td}>
                    <button onClick={() => deletePatient(patient.id)} style={styles.deleteButton}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

const styles = {
  th: {
    padding: "12px",
    border: "1px solid #ddd",
    textAlign: "center"
  },
  tr: {
    borderBottom: "1px solid #ddd"
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "center"
  },
  deleteButton: {
    padding: "8px 12px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#ff4d4d",
    color: "white",
    cursor: "pointer"
  }
};

export default PatientManager;
