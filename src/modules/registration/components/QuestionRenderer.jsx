import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CardSelector } from '../pages/Step01/LookingForCardSelector';
import { QuestionBlock } from './QuestionBlock';
import { StepNavigation } from './StepNavigation';
import { Chip } from '../../../shared/ui/Chip';
import { Input } from '../../../shared/ui/Input';
import { Select } from '../../../shared/ui/Select';
import { DatePicker } from '../../../shared/ui/DatePicker';
import { PhoneInput } from '../../../shared/ui/PhoneInput';
import { useRegistrationStore } from '../store/registrationStore';
import { groomOptions, brideOptions, genderOptions } from '../config/step1Config';

export const QuestionRenderer = ({ 
  onNext, 
  onPrev, 
  questions,
  titleHighlight = "Basic",
  titleRest = "Details"
}) => {
  const { 
    registrationData,
    updateField 
  } = useRegistrationStore();
  
  const [showValidation, setShowValidation] = useState(false);

  if (questions) {
    const isStepValid = questions.every(q => {
      if (!q.required) return true;
      
      if (q.type === 'phone') {
        const phoneVal = registrationData.phoneNumber;
        if (!phoneVal || phoneVal.length < 5) return false;
        return true;
      }
      
      const val = registrationData[q.id];
      if (!val) return false;
      if (q.type === 'datePicker' && val.length !== 10) return false;
      
      return true;
    });

    const handleNext = () => {
      if (isStepValid) {
        onNext();
      } else {
        setShowValidation(true);
      }
    };

    return (
      <div className="flex flex-col items-center lg:items-start justify-start w-full mt-0">
        <QuestionBlock 
          titleHighlight={titleHighlight} 
          titleRest={titleRest}
          hideDivider={true}
        >
          <div className="flex flex-col w-full text-center lg:text-left gap-[clamp(0.8rem,2vh,1.5rem)] mt-[clamp(0.5rem,1vh,1rem)] px-2 lg:px-0">
            {questions.map((q, idx) => {
              let val = '';
              let isError = false;

              if (q.type === 'phone') {
                val = registrationData.phoneNumber || '';
                if (showValidation && q.required) {
                  if (!val || val.length < 5) isError = true;
                }
              } else {
                val = registrationData[q.id] || '';
                if (showValidation && q.required) {
                  if (!val) isError = true;
                  else if (q.type === 'datePicker' && val.length !== 10) isError = true;
                }
              }
              
              const commonProps = {
                key: q.id,
                label: q.title,
                placeholder: q.placeholder,
                value: val,
                options: q.options,
                onChange: (e) => {
                  updateField(q.id, e.target.value);
                  setShowValidation(false);
                },
                error: isError ? 'This field is required' : undefined
              };

              // Special handling for PhoneInput
              if (q.type === 'phone') {
                return (
                  <motion.div 
                    key={q.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="w-full max-w-[clamp(280px,80%,400px)] lg:max-w-md mx-auto lg:mx-0"
                  >
                    <PhoneInput 
                      label={q.title}
                      placeholder={q.placeholder}
                      countryCodeValue={registrationData.countryCode}
                      phoneNumberValue={registrationData.phoneNumber}
                      onCountryCodeChange={(val) => {
                        updateField('countryCode', val);
                        setShowValidation(false);
                      }}
                      onPhoneNumberChange={(val) => {
                        updateField('phoneNumber', val);
                        setShowValidation(false);
                      }}
                      error={isError ? 'This field is required' : undefined}
                    />
                  </motion.div>
                );
              }

              return (
                <motion.div 
                  key={q.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="w-full max-w-[clamp(280px,80%,400px)] lg:max-w-md mx-auto lg:mx-0"
                >
                  {q.type === 'input' && <Input type={q.inputType || 'text'} {...commonProps} />}
                  {q.type === 'select' && <Select {...commonProps} />}
                  {q.type === 'datePicker' && <DatePicker {...commonProps} />}
                </motion.div>
              );
            })}
          </div>

          {/* Validation error message */}
          {showValidation && !isStepValid && (
            <motion.div 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-[#d32f2f] font-sans text-[clamp(11px,1.2vw,14px)] flex items-center justify-center lg:justify-start gap-1.5 w-full px-2 lg:px-0 font-medium"
            >
              <span>⚠️</span>
              <span>Please fill in all required fields to continue.</span>
            </motion.div>
          )}

          <div className="w-full flex justify-center lg:justify-start mt-[clamp(1rem,2vh,1.5rem)]">
            <StepNavigation onNext={handleNext} onPrev={onPrev} />
          </div>
        </QuestionBlock>
      </div>
    );
  }

  // === CUSTOM RENDERER FOR STEP 1 ===
  const { role: selectedRole, profileFor, gender } = registrationData;
  const currentOptions = selectedRole === 'groom' ? groomOptions : brideOptions;

  const handleSelectRole = (role) => {
    updateField('role', role);
    updateField('profileFor', '');
    updateField('gender', '');
    setShowValidation(false);
  };

  const isInvalid = 
    (selectedRole === 'groom' && gender === 'male') || 
    (selectedRole === 'bride' && gender === 'female');

  const canProceed = profileFor && gender && !isInvalid;

  const handleNext = () => {
    if (canProceed) {
      onNext();
    } else {
      setShowValidation(true);
    }
  };

  return (
    <div className="flex flex-col items-center lg:items-start justify-start w-full mt-0">
      <QuestionBlock 
        titleHighlight="Looking" 
        titleRest="for?"
        hideDivider={true}
      >
        <div className="w-full mt-[-clamp(0.2rem,0.5vh,0.5rem)]">
          <CardSelector selectedRole={selectedRole} onSelectRole={handleSelectRole} />
        </div>
        
        <div className="w-full text-center lg:text-left flex flex-col items-center lg:items-start mt-[clamp(0.2rem,0.8vh,0.6rem)]">
          <h4 className="flex items-center justify-center lg:justify-start gap-1.5 mb-[clamp(0.2rem,0.6vh,0.4rem)] w-full">
            <span className="font-cursive text-[clamp(1.1rem,2vw,1.4rem)] text-[#B58E3A] font-normal">Who</span>
            <span className="font-serif text-[clamp(0.8rem,1.5vw,1.05rem)] text-luxury-navy">is this profile for?</span>
          </h4>
          <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2.5 w-full px-2 lg:px-0">
            {currentOptions.map((item) => (
              <Chip 
                key={item.id}
                label={item.label}
                icon={item.icon}
                active={profileFor === item.id}
                onClick={() => {
                  updateField('profileFor', item.id);
                  setShowValidation(false);
                }}
              />
            ))}
          </div>
        </div>

        {profileFor && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full text-center lg:text-left flex flex-col items-center lg:items-start mt-[clamp(0.4rem,1.2vh,0.8rem)]"
          >
            <h4 className="flex items-center justify-center lg:justify-start gap-1.5 mb-[clamp(0.2rem,0.6vh,0.4rem)] w-full">
              <span className="font-cursive text-[clamp(1.1rem,2vw,1.4rem)] text-[#B58E3A] font-normal">What's</span>
              <span className="font-serif text-[clamp(0.8rem,1.5vw,1.05rem)] text-luxury-navy">
                {profileFor === 'myself' ? 'your gender?' : "the candidate's gender?"}
              </span>
            </h4>
            <div className="flex flex-row justify-center lg:justify-start gap-3 w-full px-2 lg:px-0">
              {genderOptions.map((item) => (
                <Chip 
                  key={item.id}
                  label={item.label}
                  icon={item.icon}
                  active={gender === item.id}
                  onClick={() => {
                    updateField('gender', item.id);
                    setShowValidation(false);
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {showValidation && (
          <motion.div 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 text-[#d32f2f] font-sans text-[clamp(11px,1.2vw,14px)] flex items-center justify-center lg:justify-start gap-1.5 w-full px-2 lg:px-0 font-medium"
          >
            <span>⚠️</span>
            <span>
              {(!profileFor || !gender) 
                ? "Please answer all questions before proceeding." 
                : (selectedRole === 'groom' 
                  ? "Candidate's gender cannot be Male when selecting Groom." 
                  : "Candidate's gender cannot be Female when selecting Bride.")}
            </span>
          </motion.div>
        )}
        
        <div className="w-full flex justify-center lg:justify-start mt-[clamp(0.4rem,1.2vh,0.8rem)]">
          <StepNavigation onNext={handleNext} onPrev={onPrev} />
        </div>
      </QuestionBlock>
    </div>
  );
};
