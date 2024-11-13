import React from 'react';
import PatientProvider from './hosccon1';
import PatientManager from './hosccon2';
const Hos=()=>
{
    return(
        <>
        <PatientProvider>
            <PatientManager/>
        </PatientProvider>
        </>
    )
}
export default Hos;