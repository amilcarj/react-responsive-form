import React from 'react';

import '../styles/formField.scss';

const FormField = ({ label, type, value, required, placeholder, onChange, validate, errorText, min, max }) => {
  const checkValidity = () => {
    validate(value);
  }

  let inputStyle = 'input-field', error = '';
  if (errorText) {
    inputStyle = `${inputStyle} input-error`;
    error = (
      <div className='error-tooltip'>
        <span className='error-text'>{errorText}</span>
      </div>
    );
  }

  return (
    <label className='input-label'>
      {label}
      <input 
        className={inputStyle}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={checkValidity}
        min={min}
        max={max}
      />
      {error}
    </label>
  );
};

export default FormField;
