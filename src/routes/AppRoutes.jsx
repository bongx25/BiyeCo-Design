import React from 'react';
import { useRegistrationStore } from '../modules/registration/store/registrationStore';
import { RegistrationShell } from '../modules/registration/layout/RegistrationShell';
import { Step1 } from '../modules/registration/pages/Step01/Step01';
import { Step2 } from '../modules/registration/pages/Step02/Step02';
import { Step3 } from '../modules/registration/pages/Step03/Step03';
import { Step4 } from '../modules/registration/pages/Step04/Step04';
import { Step5 } from '../modules/registration/pages/Step05/Step05';
import { Step6 } from '../modules/registration/pages/Step06/Step06';
import { Step7 } from '../modules/registration/pages/Step07/Step07';
import { Step8 } from '../modules/registration/pages/Step08/Step08';
import { Step9 } from '../modules/registration/pages/Step09/Step09';
import { Step10 } from '../modules/registration/pages/Step10/Step10';
import { Step11 } from '../modules/registration/pages/Step11/Step11';
import { Step12 } from '../modules/registration/pages/Step12/Step12';
import { Step13 } from '../modules/registration/pages/Step13/Step13';
import { Step14 } from '../modules/registration/pages/Step14/Step14';
import { STEP_IDS, getActiveFlow } from '../modules/registration/config/flowConfig';

export function RegistrationFlow() {
  const { step, nextStep, prevStep, registrationData } = useRegistrationStore();
  
  const isManaged = registrationData.profileFor && registrationData.profileFor !== 'myself';
  const activeFlow = getActiveFlow(registrationData.profileFor);
  const currentStepId = activeFlow[step - 1];

  const renderStep = () => {
    switch (currentStepId) {
      case STEP_IDS.PROFILE_SELECTION:
        return <Step1 onNext={nextStep} />;
      case STEP_IDS.CANDIDATE_DETAILS:
        return <Step2 onPrev={prevStep} onNext={nextStep} isManaged={isManaged} />;
      case STEP_IDS.LOCATION:
        return <Step3 onPrev={prevStep} onNext={nextStep} isManaged={isManaged} />;
      case STEP_IDS.PARENT_DETAILS:
        return <Step4 onPrev={prevStep} onNext={nextStep} />;
      case STEP_IDS.CONTACT_DETAILS:
        return <Step5 onPrev={prevStep} onNext={nextStep} isManaged={isManaged} />;
      case STEP_IDS.CREATE_PASSWORD:
        return <Step6 onPrev={prevStep} onNext={nextStep} />;
      case STEP_IDS.EDUCATION_CAREER:
        return <Step7 onPrev={prevStep} onNext={nextStep} />;
      case STEP_IDS.PERSONAL_DETAILS:
        return <Step8 onPrev={prevStep} onNext={nextStep} />;
      case STEP_IDS.LIFESTYLE_INTRO:
        return <Step9 onPrev={prevStep} onNext={nextStep} />;
      case STEP_IDS.FAMILY_FUTURE:
        return <Step10 onPrev={prevStep} onNext={nextStep} />;
      case STEP_IDS.PARTNER_EDU_CAREER:
        return <Step11 onPrev={prevStep} onNext={nextStep} />;
      case STEP_IDS.PARTNER_PHYSICAL:
        return <Step12 onPrev={prevStep} onNext={nextStep} />;
      case STEP_IDS.PARTNER_LIFESTYLE:
        return <Step13 onPrev={prevStep} onNext={nextStep} />;
      case STEP_IDS.PHOTO_UPLOAD:
        return <Step14 onPrev={prevStep} onNext={nextStep} />;
      default:
        return null;
    }
  };

  return (
    <RegistrationShell>
      {renderStep()}
    </RegistrationShell>
  );
}
