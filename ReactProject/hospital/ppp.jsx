import React from 'react';
const Ppp = (Component, patientData) => {
  return (props) => (
    <div className="patientco">
      <h1 className="tit" style={{ fontSize: '30px' }}>Patient Details</h1>
      <div className="patientit">
        <img
          src={patientData.picture}
          alt={patientData.name}
          className="patientpic"
        />
        <div className="patientin">
          <h1 style={{ fontSize: '40px' }} className="patientna">{patientData.name}</h1>
          <p style={{ fontSize: '20px' }} className="patientda">Date of Visit: {patientData.doc}</p>
          <p style={{ fontSize: '20px' }} className="patientdo">Consulted Doctor: {patientData.doctor}</p>
          <p style={{ fontSize: '20px' }} className="patientco">Contact: {patientData.contact}</p>
          <p style={{ fontSize: '20px' }} className="patientad">Address: {patientData.address}</p>
          <p className="patientmed" style={{ fontSize: '20px' }}>Medical History: {patientData.history}</p>
       <a href={`tel:${patientData.contact}`}>
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

export default Ppp;
