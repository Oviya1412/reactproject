import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const PaymentForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    disease: '',
    fee: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push({
      pathname: '/qr-code',
      state: { formData }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Patient Payment Form</h2>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Disease:
        <input type="text" name="disease" value={formData.disease} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Fee:
        <input type="number" name="fee" value={formData.fee} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Pay</button>
    </form>
  );
};

export default PaymentForm;
