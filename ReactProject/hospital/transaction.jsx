import React from 'react';
import './transaction.css';
const Transaction=()=>
{
    const data=[
        {sno:"1.",name:"Dharshana" ,date:"2024-2-14",status:"Paid" ,amount:10000,pm:"online"},
        {sno:"2.",name:"Dhivya" ,date:"2024-2-14",status:"Paid" ,amount:20000,pm:"online"},
        {sno:"3.",name:"Kavya" ,date:"2024-3-24",status:"Not Paid" ,amount:5000,pm:"nil"},
        {sno:"4.",name:"Riya" ,date:"2024-6-16",status:"Paid" ,amount:7000,pm:"online"},
        {sno:"5.",name:"Rithiga" ,date:"2024-5-4",status:"Not Paid" ,amount:100000,pm:"nil"},
        {sno:"6.",name:"Karthika" ,date:"2024-7-1",status:"Paid" ,amount:12000,pm:"online"},
    ];
    return (
        <>
        <div>
            <br></br>
            <br></br>
            <h1 className="title">Recent Transaction</h1>
        </div>
        <div className="tab">
            <table border="3" width={1050} height={300} className='tabb'>
                <thead className='th'>
                <tr>
                    <th>S.No</th>
                    <th>Patient</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Payment method</th>
                </tr>
                </thead>
                <tbody>
                  {data.map((item,index)=>
                (
                    <tr key={index}>
                        <td>{item.sno}</td>
                        <td>{item.name}</td>
                        <td>{item.date}</td>
                        <td>{item.status}</td>
                        <td>{item.amount}</td>
                        <td>{item.pm}</td>
                    </tr>
                ))}
                </tbody>
                
            </table>
        </div>
        </>
    )
}
export default Transaction;