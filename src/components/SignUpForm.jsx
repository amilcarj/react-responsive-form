import React from 'react';

import '../styles/signUpForm.scss';

const SignUpForm = () => {
  const submitForm = () => {
    alert('submitted');
  };

  return (
    <form className='form-container' onSubmit={submitForm}>
      <label className='input-label'>
        Email
        <input className='input-field' type='email' required placeholder='Email' />
      </label>
      <label className='input-label'>
        Password
        <input className='input-field' type='password' required placeholder='Password' />
      </label>
      <label className='input-label'>
        Confirm Password
        <input className='input-field' type='password' required placeholder='Confirm Password' />
      </label>
      <label className='input-label'>
        Pet Name
        <input className='input-field' type='text' required placeholder='Pet Name' />
      </label>
      <label className='input-label'>
        Pet Weight
        <input className='input-field' type='number' required placeholder='Pet Weight' />
      </label>
      <label className='input-label'>
        Pet Ideal Weight
        <input className='input-field' type='number' placeholder='Pet Ideal Weight' />
      </label>
      <button className='submit-button'>Submit!</button>
    </form>
  );
};

/*1. Email address - required, basic validation ensuring x@y, feel free to use more
complicated validation if desired
2. Password - required, min 8 chars, 1 number, 1 letter, 1 special char
3. Confirm Password - required, should match password
4. Pet name - required, can be anything
5. Pet weight - required, minimum of 3lbs, max of 180lbs
6. Pet ideal weight - optional, same validation as above  */

export default SignUpForm;
