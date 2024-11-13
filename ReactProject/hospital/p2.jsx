// P2.jsx
import React from 'react';
import Ppp from './ppp';
import './p2.css';
const P2 = () => <div />;

const patientData = {
  name: 'Sharini',
  doc: '02/04/2024',
  doctor: 'Dr. Lee',
  contact: '9566707581',
  address: '10C- near Railway Station, Palani, Dindugul dt',
  history: 'No known allergies. Previous surgeries include appendectomy.',
  picture: 'https://tse4.mm.bing.net/th?id=OIP.m4M_bi62cTr7L9Xfmol4iAHaHa&pid=Api&P=0&h=180',
};

export default Ppp(P2, patientData);
