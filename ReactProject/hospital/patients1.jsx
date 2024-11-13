
import React from 'react';
import './patients1.css';
import { useNavigate } from 'react-router-dom';
const Pat1=({patients})=>
    {
        const navigate=useNavigate();
        const navigate1=useNavigate();
        const handleClick=(patient)=>
            {
           
            if(patient==="Nidharshana")
            {
                navigate('/p1');
            }
            else if(patient==="Sharini")
            {
                navigate('/p2');
            }
        }
        const handle=()=>
        {
            navigate1('/db');
        }
        return (
          <>
          <div>
            <div style={{paddingLeft:"550px"}}>
     <button style={{height:"30px",width:"120px",backgroundColor:"skyblue"}} onClick={handle}>&larr; Back</button>
     </div>
     <br></br>
    <div className='container1'>
     
    
    <div className='list1' style={{width:'650px'}}>
    <h3 className='title1'>Recent Patients</h3>
      {patients.map((patient,index)=>(
        <div key={index} className='item1' style={{height:'85px',width:'600px'}} >
            <img src={patient.picture} alt="pic1" className='pic' onClick={handleClick}/>
            <div className='det1'>
                <h5 className='name1'>{patient.name} <button onClick={()=>handleClick(patient.name)}>See Details</button></h5>
           <p className='doc1'>Date of Visit : {patient.doc}</p>
           <p className='doctor1'>Consulted Doctor : {patient.doctor}</p>
            </div>
            </div>
        
      ))}
    </div>
    </div>
    </div>
    </>);
    }
    export default Pat1;
    