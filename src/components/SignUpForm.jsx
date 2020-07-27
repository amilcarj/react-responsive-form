import React from 'react';

import FormField from '../components/FormField';
import '../styles/signUpForm.scss';

const SignUpForm = ({ fields, onSubmit }) => {
  //Including dropdowns, radio boxes, checkboxes etc will require updating this logic
  const formFields = fields.map(field => {
    return (
      <FormField 
        key={`field-${field.label}`}
        label={field.label}
        type={field.type}
        placeholder={field.placeholder}
        min={field.min}
        max={field.max}
        value={field.value}
        required={field.required}
        onChange={field.onChange}
        validate={field.validate}
        errorText={field.errorText}
      />
    );
  });

  return (
    <div className='form-container'>
      { formFields }
      <button onClick={onSubmit} className='text-button pill-button primary-button bold'>Submit!</button>
    </div>
  );
};

export default SignUpForm;
