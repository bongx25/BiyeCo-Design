import React, { createContext, useContext, useState } from 'react';

const RegistrationContext = createContext(undefined);

export const RegistrationProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [registrationData, setRegistrationData] = useState({
    role: 'groom',
    profileFor: '',
    gender: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    country: '',
    state: '',
    pinCode: '',
    email: '',
    countryCode: '+91',
    phoneNumber: ''
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
