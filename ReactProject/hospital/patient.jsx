import React from 'react';
import './patient.css';
const Patient=({patients})=>
{
    return (
      <>

<div className='container'>
 
<h3 className='title'>Recent Patients</h3>
<div className='list'>
  {patients.map((patient,index)=>(
    <div key={index} className='item'>
        <img src={patient.picture} alt="pic1" className='pic'/>
        <div className='det'>
            <h5 className='name'>{patient.name}</h5>
       <p className='doc'>Date of Visit : {patient.doc}</p>
       <p className='doctor'>Consulted Doctor : {patient.doctor}</p>
        </div>
        </div>
    
  ))}
</div>
</div>
</>);
}
export default Patient;