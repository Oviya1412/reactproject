// P1.jsx
import React from 'react';
import Ppp from './ppp';
import './p1.css';
const P1 = () => <div />;

const patientData = {
  name: 'Nidharshana',
  doc: '24/03/2024',
  doctor: 'Dr. Robert',
  contact: '79047 98848',
  address: '12C- near Railway Station, Palani, Dindugul dt',
  history: 'No known allergies. Previous surgeries include appendectomy.',
  picture: 'https://tse4.mm.bing.net/th?id=OIP.m4M_bi62cTr7L9Xfmol4iAHaHa&pid=Api&P=0&h=180',
};

export default Ppp(P1, patientData);
