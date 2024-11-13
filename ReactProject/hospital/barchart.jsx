import React from 'react';
import  './barchart.css';
import { useNavigate } from 'react-router-dom';

const Bar=()=>
{
    const nav=useNavigate();
    const nav1=useNavigate();
    const handle1=()=>
    {
      nav('/e1');
    }
    const handle2=()=>
    {
      nav1('/tp');
    }
    return(
        <>
<div className='bar'>
        <h4 className='text'></h4>
        <img src="https://tse3.mm.bing.net/th?id=OIP.gNXN9Y7kdEskmesdMVP_gQHaEK&pid=Api&P=0&h=180" alt="hi" />
    </div>
<div className='bar'>
        <h4 className='text'>Total Patients</h4>
        <img src="https://tse2.mm.bing.net/th?id=OIP.mx5GEzzu12bAg208PbjrAQHaFZ&pid=Api&P=0&h=180" alt="hi" onClick={handle2}/>
    </div>
<div className='bar'>
        <h4 className='text'>Appointments</h4>
        <img src="https://tse4.mm.bing.net/th?id=OIP.yWs197s_45yZ31pRTp72_AHaE6&pid=Api&P=0&h=180" alt="hi" />
    </div>
<div className='bar'>
        <h4 className='text'>Prescription</h4>
        <img src="https://tse3.mm.bing.net/th?id=OIP.iHmCsqcmJheK-U5TuVNa-QHaE8&pid=Api&P=0&h=180" alt="hi" />
    </div>
<div className='bar'>
        <h4 className='text'>Earnings</h4>
        <img src="https://tse3.mm.bing.net/th?id=OIP.qBrV-wG_-88RBEAohT2BTgAAAA&pid=Api&P=0&h=180" alt="hi" onClick={handle1}/>
    </div>
</>
   );
}
export default Bar;