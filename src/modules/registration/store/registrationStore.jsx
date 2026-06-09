import React, { createContext, useContext, useState } from 'react';

const RegistrationContext = createContext(undefined);

export const RegistrationProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [registrationData, setRegistrationData] = useState({
    role: '',
    profileFor: '',
    gender: '',
    candidateFirstName: '',
    candidateLastName: '',
    candidateDOB: '',
    candidateEmail: '',
    candidatePhoneCode: '+91',
    candidatePhone: '',
    country: '',
    state: '',
    pinCode: '',
    email: '',
    guardianFirstName: '',
    guardianLastName: '',
    guardianPhoneCode: '+91',
    guardianPhone: ''
  });

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  const updateField = (fieldName, value) => {
    setRegistrationData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const value = {
    step,
    setStep,
    nextStep,
    prevStep,
    registrationData,
    updateField
  };

  return (
    <RegistrationContext.Provider value={value}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistrationStore = () => {
  const context = useContext(RegistrationContext);
  if (context === undefined) {
    throw new Error('useRegistrationStore must be used within a RegistrationProvider');
  }
  return context;
};
