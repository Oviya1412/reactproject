import React from 'react';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const navigate=useNavigate();
  const navigate1=useNavigate();
  const navigate2=useNavigate();
  const navigate3=useNavigate();
  const navigate4=useNavigate();
  const handleClick=()=>
  {
        navigate('/patients11');
  }
  const handleClick1=()=>
  {
        navigate1('/Dooc');
  }
  const handleClick2=()=>
  {
        navigate2('/Do');
  }
  const handleClick3=()=>
  {
    navigate3('/dp');
  }
  const handleClick4=()=>
  {
    navigate3('/ds');
  }
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>MyLogo</h2>
      </div>
      <ul className="menu">
        <li>Dashboard</li>
        <li onClick={handleClick}>Patient </li>
        <li onClick={handleClick1}>Doctor</li>
        <li onClick={handleClick2}>Appointment</li>
        <li onClick={handleClick3}>Payment</li>
        <li onClick={handleClick4}>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
