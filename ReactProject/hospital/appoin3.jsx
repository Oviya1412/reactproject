import React from 'react';
import Appoin from './appoin';
import Appoin1 from './appoin1';
import './appoin3.css';
const Appoin3=()=>
{
    return(
     <>
     <div className='connn'>
        <center><h1>Apointment Details</h1></center>
        <div className='appooo'>
            <div className='appo'>
            <Appoin/>
            </div>
            <div className='appo1'>
                <Appoin1/>
            </div>
        </div>
     </div>
     </>
    )
}
export default Appoin3;