import React from 'react';

import '../styles/formField.scss';

const FormField = ({ label, type, value, required, placeholder, onChange, validate, errorText, min, max }) => {
  const checkValidity = (e) => {
    validate(value);
  }

  const error = errorText || '';

  return (
    <label className='input-label'>
      {label}
      <input 
        className='input-field'
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={checkValidity}
        min={min}
        max={max} />
      {error}
    </label>
  );
};

export default FormField;
