// import React, { useState } from 'react';
// import patientContext from './hosccon';

// const PatientProvider = ({ children }) => {
//   const [patients, setPatients] = useState([]);

//   const addPatient = (newPatient) => {
//     setPatients((prevPatients) => [...prevPatients, newPatient]);
//   };

//   return (
//     <patientContext.Provider value={{ patients, addPatient }}>
//       {children}
//     </patientContext.Provider>
//   );
// };

// export default PatientProvider;
// hosccon1.jsx
import React, { useState } from 'react';
import patientContext from './hosccon';

const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  const addPatient = (newPatient) => {
    const id = patients.length ? patients[patients.length - 1].id + 1 : 1;
    setPatients((prevPatients) => [...prevPatients, { ...newPatient, id }]);
  };

  const deletePatient = (id) => {
    setPatients((prevPatients) => prevPatients.filter(patient => patient.id !== id));
  };

  return (
    <patientContext.Provider value={{ patients, addPatient, deletePatient }}>
      {children}
    </patientContext.Provider>
  );
};

export default PatientProvider;
