import React, { useState } from 'react';
import axios from 'axios';
import './Appoinform.css';
const AppForm=()=>
{
    const [data,setData]=useState({
        patientName:'',
        doctorName:'',
        date:'',
        time:'',
        reason:'',
    });
    const handlechange=(e)=>
    {
        setData({...data,[e.target.name]:e.target.value,});
    }
    const handlesubmit=(e)=>
    {
        e.preventDefault();
        axios.post("http://localhost:3000/appointments",data)
        .then((res)=>
        {
        alert("Appointment booked Succeessfully");
        setData({patientName:'',doctorName:'',date:'',time:'',reason:''})

        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return(
    <>
    <div className='div11'>
          <center><h2>
        Book an Appointment
    </h2></center>
    <form onSubmit={handlesubmit}>
        <section style={{backgroundColor:''}}>
        <div>
            <label style={{fontSize:"20px"}}>Patient Name:</label>
            <br>
            </br>
            <input type="text" name="patientName" value={data.patientName}
            onChange={handlechange}  style={{
                padding: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginLeft:"10px",
                width: "95%",
              }}required/>
        </div>
        <br>
        </br>
        <div>
            <label style={{fontSize:"20px"}}>Doctor Name:</label>
            <br></br>
            <input type="text" name="doctorName" value={data.doctorName}
            onChange={handlechange} style={{
                padding: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginLeft:"10px",
                width: "95%",
              }}required/>
        </div>
        <br></br>
        <div>
            <label style={{fontSize:"20px"}}>Date:</label>
            <br></br>
            <input type="date" name="date" value={data.date}
            onChange={handlechange}style={{
                padding: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginLeft:"10px",
                width: "95%",
              }} required/>
        </div>
        <br></br>
        <div>
            <label style={{fontSize:"20px"}}>Time:</label>
            <br></br>
            <input type="time" name="time" value={data.time}
            onChange={handlechange} style={{
                padding: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginLeft:"10px",
                width: "95%",
              }}required/>
        </div>
        <br></br>
        <div>
            <label style={{fontSize:"20px"}}>Reason:</label>
            <br></br>
            <textarea type="text" name="reason" value={data.reason}
            onChange={handlechange} style={{
                padding: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginLeft:"10px",
                width: "95%",
              }}required></textarea>
        </div>
        <br></br>
        <div>
            <center><button type="submit" style={{
            padding: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginTop: "20px",
            width: "30%",
            fontSize: "20px",
            fontFamily: "serif",
            backgroundColor: "blue",
            color: "white"}}>Book Appointment</button>
            </center>
        </div>
        </section>
    </form>
    </div>
    </>
    )
}
export default AppForm;