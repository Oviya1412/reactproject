import React, { useEffect, useState } from 'react';
import axios from 'axios';
const styles = {
    th: {
      padding: "12px",
      border: "1px solid #ddd",
      textAlign: "center",
      backgroundColor:"rgb(29, 150, 155)"
    },
    tr: {
      borderBottom: "1px solid #ddd"
    },
    td: {
      padding: "10px",
      border: "1px solid #ddd",
      textAlign: "center"
    }
   
  };
const AppList=()=>
{
    const [apmt,setApmt]=useState([]);
    useEffect(()=>
    {
       axios.get("http://localhost:3000/appointments")
       .then((res)=>
    {
        setApmt(res.data);
    })
    .catch((error)=>
    {
        console.log(error);
    });
    },[])
    return(
    <>
      <div>
        <center>
        <h2>Upcoming Appoinment List</h2>
        </center>
        <br></br>
        <div>
        <table border="1" cellPadding="10"cellSpacing="5" style={{width:"1500px"}}>
            <thead>
                <tr style={styles.tr}>
                    <th style={styles.th}>Patient Name</th>
                    <th style={styles.th}>Doctor Name</th>
                    <th style={styles.th}>Date</th>
                    <th style={styles.th}>Time</th>
                    <th style={styles.th}>Reason</th>
                </tr>
            </thead>
            <tbody>
              {apmt.length>0 ?(apmt.map((apmts)=>
            (
                <tr key={apmts} style={styles.tr}>
                    <td style={styles.td}>{apmts.patientName}</td>
                    <td style={styles.td}>{apmts.doctorName}</td>
                    <td style={styles.td}>{apmts.date}</td>
                    <td style={styles.td}>{apmts.time}</td>
                    <td style={styles.td}>{apmts.reason}</td>
                </tr>
            ))):(<tr style={styles.tr}>
                <td>No Appointments Found</td>
                </tr>
              )}
            </tbody>
        </table>
        </div>
      </div>
    </>
    )
}
export default AppList;