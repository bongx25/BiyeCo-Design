import React from 'react';
import { useRegistrationStore } from '../modules/registration/store/registrationStore';
import { RegistrationShell } from '../modules/registration/layout/RegistrationShell';
import { Step1 } from '../modules/registration/pages/Step01/Step01';
import { Step2 } from '../modules/registration/pages/Step02/Step02';
import { Step3 } from '../modules/registration/pages/Step03/Step03';
import { Step4 } from '../modules/registration/pages/Step04/Step04';

export function RegistrationFlow() {
  const { step, nextStep, prevStep } = useRegistrationStore();

  return (
    <RegistrationShell>
      {step === 1 && <Step1 onNext={nextStep} />}
      {step === 2 && <Step2 onPrev={prevStep} onNext={nextStep} />}
      {step === 3 && <Step3 onPrev={prevStep} onNext={nextStep} />}
      {step === 4 && <Step4 onPrev={prevStep} onNext={nextStep} />}
    </RegistrationShell>
  );
}
