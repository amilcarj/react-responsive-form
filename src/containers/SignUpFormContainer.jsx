import React, { useState, useEffect } from 'react';

import SignUpForm from '../components/SignUpForm';
import ResultModal from '../components/ResultModal';

import {
  REQUIRED_FIELD_ERROR,
  WEIGHT_FIELD_ERROR,
  PASSWORD_PATTERN_FIELD_ERROR,
  PASSWORD_MATCH_FIELD_ERROR,
  EMAIL_FIELD_ERROR
} from '../utils/constants';
import signUpAPI from '../api/signUpAPI';

import '../styles/signUpFormContainer.scss';

const SignUpFormContainer = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [petName, setPetName] = useState('');
  const [petNameError, setPetNameError] = useState('');
  const [petWeight, setPetWeight] = useState('');
  const [petWeightError, setPetWeightError] = useState('');
  const [idealPetWeight, setIdealPetWeight] = useState('');
  const [idealPetWeightError, setIdealPetWeightError] = useState('');

  const [fields, setFields] = useState([]);

  const [showResultModal, setShowResultModal] = useState(false);
  const [modalTextType, setModalTextType] = useState();

  useEffect(() => {
    setFields([
      { 
        label: 'Email', type: 'email', placeholder: 'Email',
        required: true, value: email, onChange: onEmailChange,
        validate: validateEmail, errorText: emailError
      },
      {
        label: 'Password', type: 'password', placeholder: 'Password',
        required: true, value: password, onChange: onPasswordChange,
        validate: validatePassword, errorText: passwordError
      },
      {
        label: 'Confirm Password', type: 'password', placeholder: 'Confirm Password',
        required: true, value: confirmPassword, onChange: onConfirmPasswordChange,
        validate: validateConfirmPassword, errorText: confirmPasswordError
      },
      {
        label: 'Pet Name', type: 'text', placeholder: 'Pet Name',
        required: true, value: petName, onChange: onPetNameChange,
        validate: validatePetName, errorText: petNameError
      },
      {
        label: 'Pet Weight', type: 'number', placeholder: 'Pet Weight',
        required: true, min: 3, max: 180, value: petWeight, onChange: onPetWeightChange,
        validate: validatePetWeight, errorText: petWeightError
      },
      {
        label: 'Ideal Pet Weight', type: 'number', placeholder: 'Ideal Pet Weight',
        min: 3, max: 180, value: idealPetWeight, onChange: onIdealPetWeightChange,
        validate: validateIdealPetWeight, errorText: idealPetWeightError
      },
    ]);
  }, [
    email, emailError, password, passwordError, confirmPassword, confirmPasswordError,
    petName, petNameError, petWeight, petWeightError, idealPetWeight, idealPetWeightError
  ]);

  const onSubmit = () => {
    if (validateEmail() || validatePassword() || validateConfirmPassword() || 
        validatePetName() || validatePetWeight() || validateIdealPetWeight())
    {
      return;
    }

    signUpAPI.signUp({ email, password, petName, petWeight, idealPetWeight })
      .then(() => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setPetName('');
        setPetWeight('');
        setIdealPetWeight('');

        setModalTextType('SUCCESS');
        setShowResultModal(true);
      }).catch(err => {
        setModalTextType(err.message.replace(' ', '_').toUpperCase());
        setShowResultModal(true);
      });  
  };

  const closeModal = () => {
    setShowResultModal(false);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    let error = validateRequiredField(email);
    if (error) {
      setEmailError(error);
      return error;
    }

    const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
    error = pattern.test(email) ? '' : EMAIL_FIELD_ERROR;
    setEmailError(error);
    return error;
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validatePassword = () => {
    let error = validateRequiredField(password);
    if (error) {
      setPasswordError(error);
      return error;
    }

    const pattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*.])(?=.{8,})/;
    error = pattern.test(password) ? '' : PASSWORD_PATTERN_FIELD_ERROR;
    setPasswordError(error);
    return error;
  };

  const onConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validateConfirmPassword = () => {
    const error = password !== confirmPassword ? PASSWORD_MATCH_FIELD_ERROR : '';
    setConfirmPasswordError(error);
    return error;
  }

  const onPetNameChange = (e) => {
    setPetName(e.target.value);
  };

  const validatePetName = () => {
    const error = validateRequiredField(petName);
    setPetNameError(error);
    return error;
  };

  const onPetWeightChange = (e) => {
    setPetWeight(e.target.value);
  };

  const validatePetWeight = () => {
    let error = validateRequiredField(petWeight);
    if (error) {
      setPetWeightError(error);
      return error;
    }

    const val = Number(petWeight);
    error = val < 3 || val > 180 ? WEIGHT_FIELD_ERROR : '';
    setPetWeightError(error);
    return error;
  };

  const onIdealPetWeightChange = (e) => {
    setIdealPetWeight(e.target.value);
  };

  const validateIdealPetWeight = () => {
    let error;

    if (idealPetWeight) {
      const val = Number(idealPetWeight);
      error = val < 3 || val > 180 ? WEIGHT_FIELD_ERROR : '';
      setIdealPetWeightError(error);
    }

    return error;
  };

  const validateRequiredField = (value) => {
    return value ? '' : REQUIRED_FIELD_ERROR;
  };

  return (
    <div className='container'>
      <div className='content'>
        <img className='sign-up-img' src='https://via.placeholder.com/600' alt='Placeholder Img' />
        <SignUpForm
          fields={fields}
          onSubmit={onSubmit}
        />
      </div>
      <ResultModal
        closeModal={closeModal}
        showModal={showResultModal}
        modalTextType={modalTextType}
        closeText='Ok'
      />
    </div>
  );
};

export default SignUpFormContainer;
