
import React from 'react';
const Ddd= (Component, doctorData) => {
  return (props) => (
    <div className="docc" style={{padding:"20px"}}>
      <h1 className="doctit" style={{ fontSize: '30px' }}>Doctor Details</h1>
      <div className="doctit">
        <img
          src={doctorData.picture}
          alt={doctorData.name}
          className="docpic"
        />
        <div className="docin">
          <h1 style={{ fontSize: '40px' }} className="docna">{doctorData.name}</h1>
          <p style={{ fontSize: '20px' }} className="docda">Specialist: {doctorData.specialist}</p>
          <p style={{ fontSize: '20px' }} className="docdo">Attended : {doctorData.attended}</p>
          <p style={{ fontSize: '20px' }} className="docco">Contact: 75078 90874{doctorData.contact}</p>
          <p style={{ fontSize: '20px' }} className="docad">Address: 10C,Dcc bank,Chennai{doctorData.address}</p>
          <p className="docmed" style={{ fontSize: '20px' }}>Medical History: {doctorData.history}</p>
       <a href={`tel:${doctorData.contact}`}>
        <button style={{padding:'10px 20px',fontSize:'18px',backgroundColor:'yellow',cursor:'pointer'}}>
          Contact
        </button>
       </a>
        </div>
      </div>
      <Component {...props} />
    </div>
  );
};

export default Ddd;
