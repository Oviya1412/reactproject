import React from 'react';
import { Chart as Chartjs, ArcElement, Tooltip, Legend } from 'chart.js';
import './patients.css';
import { Pie } from 'react-chartjs-2';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Pat = () => {
  const navigate = useNavigate();

  const datas = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      data: [20, 30, 40, 15, 23, 45, 40, 13, 42, 32, 21],
      backgroundColor: ['#489daa', '#36A2EB', '#afc1d8', '#91bdcb', '#4BC0C0', '#7199d2', '#2b6dce', '#77bcd6', '#356b7f', '#9be4ff', '#41a5c9', '#7B68EE'],
      hoverOffset: 4,
    }],
  };

  Chartjs.register(ArcElement, Tooltip, Legend);

  const handleClick = () => {
    navigate('/add'); 
  }

  return (
    <>
      <div style={{ width: '600px', height: '600px' }}>
        <h4 style={{ paddingLeft: "20px" }}>
          To Add Patients: 
          <Button variant='success' onClick={handleClick}> Add Patients</Button>
        </h4>
        <Pie data={datas} />
      </div>
    </>
  );
};

export default Pat;
