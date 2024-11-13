import React from 'react';
import Doc from './doctor';
const doctordata = [
  { 
    name: 'Dr.Karthikeyan', 
    specialist: 'Orthopedic Surgeon', 
    attended: '415', 
    picture: 'https://tse4.mm.bing.net/th?id=OIP.m4M_bi62cTr7L9Xfmol4iAHaHa&pid=Api&P=0&h=180' 
  },
  { 
    name: 'Dr.Swetha', 
    specialist: 'Pediatrician', 
    attended: '365', 
    picture: 'https://i.pinimg.com/originals/df/5f/5b/df5f5b1b174a2b4b6026cc6c8f9395c1.jpg' 
  },
  { 
    name: 'Dr.Rahul', 
    specialist: 'Dermatologist', 
    attended: '290', 
    picture: 'https://up.yimg.com/ib/th?id=OIP._rJ1jdD29FbiwE5OiFBFgwHaIA&pid=Api&rs=1&c=1&qlt=95&w=92&h=99' 
  },
  { 
    name: 'Dr.Rithanya', 
    specialist: 'Oncologist', 
    attended: '275', 
    picture: 'https://up.yimg.com/ib/th?id=OIP.KHzfwtKwyDFfIPUkM26VAAHaHa&pid=Api&rs=1&c=1&qlt=95&w=123&h=123' 
  },
  { 
    name: 'Dr.Riya', 
    specialist: 'Neurologist', 
    attended: '238', 
    picture: 'https://tse3.mm.bing.net/th?id=OIP.69CSjVl8vz6OBba-IxxeaQHaHa&pid=Api&P=0&h=180' 
  },
  { 
    name: 'Dr.Sanchana', 
    specialist: 'General Practitioner', 
    attended: '200', 
    picture: 'https://up.yimg.com/ib/th?id=OIP.CzaMD6m6rWJtVHOaSxRZ9AHaH0&pid=Api&rs=1&c=1&qlt=95&w=108&h=114' 
  },
];

const Dooc=()=>
{
    return(
            <>
               <div>
                <Doc patientss={doctordata}/>
               </div>
            </>
    )
}
export default Dooc;