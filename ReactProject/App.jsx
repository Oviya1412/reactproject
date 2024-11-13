import React from 'react';
import './App.css';
import Sidebar from './hospital/sidebar';
import SearchBar from './hospital/searchbar';
import Bar from './hospital/barchart';
import Chart from './hospital/charts';
import Patient from './hospital/patient';
import Transaction from './hospital/transaction';
import Ren from './Ren';

const patientdata = [
  { name: 'Dharshana', date: '2024-08-15', doctor: 'Dr. Oviya', picture: 'https://tse4.mm.bing.net/th?id=OIP.m4M_bi62cTr7L9Xfmol4iAHaHa&pid=Api&P=0&h=180' },
  { name: 'Sharini', date: '2024-08-19', doctor: 'Dr. Lee', picture: 'https://i.pinimg.com/originals/df/5f/5b/df5f5b1b174a2b4b6026cc6c8f9395c1.jpg' },
  // { name: 'Pratibha', date: '2024-08-16', doctor: 'Dr. Johnson', picture: 'https://up.yimg.com/ib/th?id=OIP._rJ1jdD29FbiwE5OiFBFgwHaIA&pid=Api&rs=1&c=1&qlt=95&w=92&h=99' },
  { name: 'Rakshith', date: '2024-08-17', doctor: 'Dr. Williams', picture: 'https://up.yimg.com/ib/th?id=OIP.KHzfwtKwyDFfIPUkM26VAAHaHa&pid=Api&rs=1&c=1&qlt=95&w=123&h=123' },
  { name: 'Rithiga', date: '2024-08-18', doctor: 'Dr. Davis', picture: 'https://tse3.mm.bing.net/th?id=OIP.69CSjVl8vz6OBba-IxxeaQHaHa&pid=Api&P=0&h=180' },
  // { name: 'Sanmithra', date: '2024-08-19', doctor: 'Dr. Lee', picture: 'https://up.yimg.com/ib/th?id=OIP.CzaMD6m6rWJtVHOaSxRZ9AHaH0&pid=Api&rs=1&c=1&qlt=95&w=108&h=114' },
];
const datas={
  labels:['Januray','Febrary','March','April','May','June','July','August','September','October','November','December'],
  datasets:[{
    data:[20,30,40,15,23,45,40,13,42,32,21],
    backgroundColor: [
      '#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0',
      '#FF9F40', '#FF6F61', '#6A1B9A', '#FFBF00', '#2E8B57',
      '#D2691E', '#7B68EE'
    ],
    hoverOffset:4
  }]
}
class App extends React.Component {
  render() {
    const patients = ['Nidharshana', 'Sharini', 'Alice Johnson', 'Bob Brown', 'Charlie Wilson'];
    return (
      <>
        <Sidebar />
        <SearchBar patients={patients} />
        <div className='bar-container'>
          <Bar />
        </div>
        <div className='charts-container'>
          <div className='chart-container'>
            <Chart />
          </div>
          <div className='container'>
            <Patient patients={patientdata} />
          </div>
        </div>
        <Transaction />
      </>
    );
  }
}
// const App=()=>
// {
//   return (
//     <div>
//       <Ren/>
//     </div>
//   )
// }
export default App;
