import React from 'react';
import { useNavigate } from 'react-router-dom';
const Appoin=()=>
{
    const navigate=useNavigate();
    const handle1=()=>
    {
      navigate('/han1');
    }
    return(
     <>
     <div>
        <div style={{padding:"130px"}}>
        <div style={{borderRadius:"50px",padding:"30px",height:"400px",width:"500px",border:"3px solid gray",backgroundColor:"rgb(29, 150, 155)"}}>
        <div style={{borderRadius:"50px",padding:"20px"}}>
            <button style={{color:"rgb(31, 30, 47)",backgroundColor:"rgb(169, 219, 220)",borderRadius:"50px",height:"300px",width:"400px",fontSize:"35px"}} onClick={handle1}>Appointment<br></br>Form</button>
        </div>
        </div>
     </div>
     </div>
     </>
    )
}
export default Appoin;
