import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale,BarElement,Title,Tooltip, Legend
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PatientChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Total Patients',
        data: [120, 150, 180, 200, 170, 220, 190, 240, 260, 230, 210, 250], 
        backgroundColor: '#42a5f5',
        borderColor: '#1e88e5',
        borderWidth: 1
      }
    ]
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Total Patient Count Per Month',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default PatientChart;
