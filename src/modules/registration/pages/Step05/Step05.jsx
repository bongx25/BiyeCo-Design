import React from 'react';
import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { QuestionRenderer } from '../../components/QuestionRenderer';
import { LeftSection } from '../../components/LeftSection';
import { RightSection } from '../../components/RightSection';
import { getStep5Hero, getStep5Questions } from '../../config/step5Config';
import { useRegistrationStore } from '../../store/registrationStore';

export const Step5 = ({ onPrev, onNext, isManaged }) => {
  const { registrationData } = useRegistrationStore();
  const selectedRole = registrationData?.role;
  const role = selectedRole === 'groom' ? 'bride' : (selectedRole === 'bride' ? 'groom' : 'candidate');
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col min-h-0 w-full m-0 p-0">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] xl:grid-cols-[3.8fr_6.2fr] gap-[clamp(1rem,3vw,3rem)] items-stretch flex-1 min-h-0 w-full p-0 overflow-hidden">
          <LeftSection>
            <HeroSection config={getStep5Hero(isManaged, role)} />
          </LeftSection>
          <RightSection>
            <div className="flex flex-col h-full overflow-hidden p-0 m-0">
              <QuestionRenderer 
                onNext={onNext} 
                onPrev={onPrev} 
                questions={getStep5Questions(isManaged, role)} 
                titleHighlight="How Can We"
                titleRest="Reach You?"
              />
            </div>
          </RightSection>
        </div>
      </main>
    </>
  );
};
