import React from 'react';

import { resultModalConstants } from '../utils/constants';

import '../styles/resultModal.scss';

const ResultModal = ({ modalTextType, showModal, closeModal, closeText }) => {
  const text = resultModalConstants[modalTextType];

  return (
    <div className={`modal-container ${showModal ? 'modal-fade-in' : 'modal-fade-out'}`}>
      <div className='modal-content'>
        <div className='bold message'>{text}</div>
        <button onClick={closeModal} className='text-button pill-button secondary-button bold close-button'>{closeText}</button>
      </div>
    </div>
  );
};

export default ResultModal;
