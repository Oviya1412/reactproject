// src/hospital/EarningsChart.jsx
import React from 'react';
import './charts.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data
const data = [
  { name: 'Jan', earnings: 4000 },
  { name: 'Feb', earnings: 3000 },
  { name: 'Mar', earnings: 2000 },
  { name: 'Apr', earnings: 2780 },
  { name: 'May', earnings: 1890 },
  { name: 'Jun', earnings: 2390 },
  { name: 'Jul', earnings: 3490 },
  { name: 'Aug', earnings: 4000 },
  { name: 'Sep', earnings: 3000 },
  { name: 'Oct', earnings: 2000 },
  { name: 'Nov', earnings: 2780 },
  { name: 'Dec', earnings: 1890 },
  
];

const Echart = () => {
  return (
    <>
    <br></br>
    <br></br>
          <h1 style={{color:'black'}}><center>Hospital Earnings Over Time</center></h1>
    <div className='chart-container'>
          <br></br>
      <ResponsiveContainer width="50%" height={400}>
        <LineChart data={data} >
          <CartesianGrid strokeDasharray={"3 3"} stroke="black" fill="#cddce2"/>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="linear" dataKey="earnings" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      <br></br>
    </div>
      <h2  style={{color:'red'}}><center>Hospital Growth Based on several Aspects</center></h2>
   
    </>
  );
};

export default Echart;
