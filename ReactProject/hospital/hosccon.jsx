import React, { createContext, useContext }  from "react";
const patientContext=createContext();
export const usePatientContext=()=>useContext(patientContext);
export default patientContext;