import React from 'react';
import './patients11.css';
import Pat from './patients';
import Pat1 from './patients1';
const Patt=()=>
{
    const patientdata = [
        { name: 'Nidharshana', date: '2024-08-15', doctor: 'Dr. Robert', picture: 'https://tse4.mm.bing.net/th?id=OIP.m4M_bi62cTr7L9Xfmol4iAHaHa&pid=Api&P=0&h=180' },
        { name: 'Sharini', date: '2024-08-19', doctor: 'Dr. Lee', picture: 'https://i.pinimg.com/originals/df/5f/5b/df5f5b1b174a2b4b6026cc6c8f9395c1.jpg' },
        { name: 'Pratibha', date: '2024-08-16', doctor: 'Dr. Johnson', picture: 'https://up.yimg.com/ib/th?id=OIP._rJ1jdD29FbiwE5OiFBFgwHaIA&pid=Api&rs=1&c=1&qlt=95&w=92&h=99' },
        { name: 'Rakshith', date: '2024-08-17', doctor: 'Dr. Williams', picture: 'https://up.yimg.com/ib/th?id=OIP.KHzfwtKwyDFfIPUkM26VAAHaHa&pid=Api&rs=1&c=1&qlt=95&w=123&h=123' },
        { name: 'Rithiga', date: '2024-08-18', doctor: 'Dr. Davis', picture: 'https://tse3.mm.bing.net/th?id=OIP.69CSjVl8vz6OBba-IxxeaQHaHa&pid=Api&P=0&h=180' },
        { name: 'Sanmithra', date: '2024-08-19', doctor: 'Dr. Lee', picture: 'https://up.yimg.com/ib/th?id=OIP.CzaMD6m6rWJtVHOaSxRZ9AHaH0&pid=Api&rs=1&c=1&qlt=95&w=108&h=114' },
      ];
    return(
        <>
        <center><h1>Patient Details</h1></center>
        <div className='cont'>
            
        <div className='piechart'>
        <Pat/>
        </div>
        <div className='patientlist'>
        <Pat1 patients={patientdata}/>
        </div>
       </div>
        </>
    )
}
export default Patt;