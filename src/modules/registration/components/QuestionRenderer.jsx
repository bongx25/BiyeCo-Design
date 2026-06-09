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
      if (q.type === 'sectionTitle') return true;
      if (!q.required) return true;
      
      if (q.type === 'phone') {
        const phoneVal = registrationData[q.id];
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
      <div className="flex flex-col items-center lg:items-start justify-start w-full h-full mt-0">
        <QuestionBlock 
          titleHighlight={titleHighlight} 
          titleRest={titleRest}
        >
          <div className="w-full flex-1 min-h-0 overflow-hidden pr-2 flex flex-col justify-start">
            <div className={`flex flex-col w-full text-center lg:text-left justify-center lg:justify-start px-1 lg:px-0 ${showValidation && !isStepValid ? 'gap-[clamp(0.1rem,min(0.5vh,0.5vw),0.5rem)] mt-0 mb-0' : 'gap-[clamp(0.2rem,min(1.5vh,1vw),2rem)] mt-[clamp(0.2rem,min(1vh,0.5vw),1rem)] mb-[clamp(0.2rem,min(1vh,0.5vw),1rem)]'}`}>
              {questions.map((q, idx) => {
              if (q.type === 'sectionTitle') {
                return (
                  <motion.div 
                    key={q.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`w-full max-w-[clamp(280px,80%,400px)] lg:max-w-[450px] mx-auto lg:mx-0 ${idx > 0 ? 'mt-[clamp(0.4rem,min(1.5vh,1vw),1.5rem)]' : ''}`}
                  >
                    <h4 className="flex items-center justify-start gap-1.5 w-full mb-1">
                      <span className="font-serif text-[clamp(1.05rem,min(1.8vw,2vh),1.4rem)] font-medium text-luxury-navy">{q.title}</span>
                      {q.subtitle && <span className="font-serif text-[clamp(0.85rem,1.3vw,1.05rem)] text-luxury-charcoal/70 font-normal">{q.subtitle}</span>}
                      {q.required && <span className="text-red-400 text-[clamp(0.8rem,1.5vw,1.05rem)] ml-1">*</span>}
                    </h4>
                    <div className="w-full h-[1px] bg-gradient-to-r from-luxury-gold/40 to-transparent" />
                  </motion.div>
                );
              }

              let val = '';
              let isError = false;

              if (q.type === 'phone') {
                val = registrationData[q.id] || '';
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
                    className="w-full max-w-[clamp(280px,80%,400px)] lg:max-w-[clamp(450px,75%,700px)] mx-auto lg:mx-0"
                  >
                    <PhoneInput 
                      label={q.title}
                      placeholder={q.placeholder}
                      countryCodeValue={registrationData[`${q.id}Code`] || '+91'}
                      phoneNumberValue={registrationData[q.id]}
                      onCountryCodeChange={(val) => {
                        updateField(`${q.id}Code`, val);
                        setShowValidation(false);
                      }}
                      onPhoneNumberChange={(val) => {
                        updateField(q.id, val);
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
                  className="w-full max-w-[clamp(280px,80%,400px)] lg:max-w-[clamp(450px,75%,700px)] mx-auto lg:mx-0"
                >
                  {q.type === 'input' && <Input type={q.inputType || 'text'} {...commonProps} />}
                  {q.type === 'select' && <Select {...commonProps} />}
                  {q.type === 'datePicker' && <DatePicker {...commonProps} />}
                </motion.div>
              );
            })}
          </div>

        </div>
        <div className="w-full shrink-0 flex justify-center lg:justify-start mt-auto pt-[clamp(0.5rem,min(2vh,2vw),1.5rem)] pb-2">
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
    <div className="flex flex-col items-start justify-start w-full h-full mt-0">
      <QuestionBlock 
        titleHighlight="Looking" 
        titleRest="for?"
        hideDivider={true}
      >
        <div className="w-full flex-1 min-h-0 overflow-hidden pr-2 flex flex-col justify-start">
          <div className="w-full">
            <CardSelector selectedRole={selectedRole} onSelectRole={handleSelectRole} />
          </div>
          
          <div className={`w-full text-left flex flex-col items-start ${showValidation && (!profileFor || !gender || isInvalid) ? 'mt-[clamp(0.1rem,min(0.5vh,0.5vw),0.5rem)]' : 'mt-[clamp(0.2rem,min(1.5vh,1vw),1.5rem)]'}`}>
            <h4 className="flex items-center justify-start gap-1.5 mb-[clamp(0.5rem,1vh,0.8rem)] w-full">
              <span className="font-cursive text-[clamp(1.6rem,min(2.8vw,3vh),2.2rem)] text-[#B58E3A] font-normal">Who</span>
              <span className="font-serif text-[clamp(0.85rem,1.4vw,1.1rem)] text-luxury-navy">is this profile for?</span>
            </h4>
            <div className="flex flex-row flex-wrap justify-start gap-1.5 sm:gap-2.5 w-full px-0">
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

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`w-full text-left flex flex-col items-start ${showValidation && (!profileFor || !gender || isInvalid) ? 'mt-[clamp(0.1rem,min(0.5vh,0.5vw),0.5rem)]' : 'mt-[clamp(0.2rem,min(1.5vh,1vw),1.5rem)]'}`}
          >
            <h4 className="flex items-center justify-start gap-1.5 mb-[clamp(0.5rem,1vh,0.8rem)] w-full">
              <span className="font-cursive text-[clamp(1.6rem,min(2.8vw,3vh),2.2rem)] text-[#B58E3A] font-normal">What's</span>
              <span className="font-serif text-[clamp(0.85rem,1.4vw,1.1rem)] text-luxury-navy">
                {profileFor === 'myself' ? 'your gender?' : "the candidate's gender?"}
              </span>
            </h4>
            <div className="flex flex-row justify-start gap-3 w-full px-0">
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

          {showValidation && (!profileFor || !gender || isInvalid) && (
            <motion.div 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-[#d32f2f] font-sans text-[clamp(11px,1.2vw,14px)] flex items-center justify-center lg:justify-start gap-1.5 w-full px-2 lg:px-0 font-medium"
            >
              <span>⚠️</span>
              <span>
                {(!profileFor || !gender) 
                  ? "Please select all the fields before proceeding." 
                  : (selectedRole === 'groom' 
                    ? "Candidate's gender cannot be Male when selecting Groom." 
                    : "Candidate's gender cannot be Female when selecting Bride.")}
              </span>
            </motion.div>
          )}
          
        </div>
        <div className="w-full shrink-0 flex justify-center lg:justify-start mt-auto pt-[clamp(0.5rem,min(2vh,2vw),1.5rem)] pb-2">
          <StepNavigation onNext={handleNext} onPrev={onPrev} />
        </div>
      </QuestionBlock>
    </div>
  );
};
