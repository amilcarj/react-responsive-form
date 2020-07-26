import React, { useState, useEffect } from 'react';

import SignUpForm from '../components/SignUpForm';
import '../styles/signUpFormContainer.scss';

const SignUpFormContainer = () => {

  return (
    <div className='container'>
      <div className='content'>
        <img className='sign-up-img' src='https://via.placeholder.com/600' alt='Placeholder Img' />
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpFormContainer;
