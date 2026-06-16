import React from 'react';
import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { QuestionRenderer } from '../../components/QuestionRenderer';
import { LeftSection } from '../../components/LeftSection';
import { RightSection } from '../../components/RightSection';
import { getStep3Hero, getStep3Questions } from '../../config/step3Config';
import { useRegistrationStore } from '../../store/registrationStore';

export const Step3 = ({ onPrev, onNext, isManaged }) => {
  const { registrationData } = useRegistrationStore();
  const selectedRole = registrationData?.role;
  const role = selectedRole === 'groom' ? 'bride' : (selectedRole === 'bride' ? 'groom' : 'candidate');
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col min-h-0 w-full m-0 p-0">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] xl:grid-cols-[3.8fr_6.2fr] gap-[clamp(1rem,3vw,3rem)] items-stretch flex-1 min-h-0 w-full p-0 overflow-hidden">
          <LeftSection>
            <HeroSection config={getStep3Hero(isManaged, role)} />
          </LeftSection>
          <RightSection>
            <QuestionRenderer 
              onNext={onNext} 
              onPrev={onPrev} 
              questions={getStep3Questions(isManaged, role)} 
              titleHighlight="Where"
              titleRest={isManaged ? `does the ${role}'s live?` : "do you live?"}
            />
          </RightSection>
        </div>
      </main>
    </>
  );
};
