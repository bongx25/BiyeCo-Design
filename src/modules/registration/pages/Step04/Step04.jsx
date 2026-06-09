import React from 'react';
import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { QuestionRenderer } from '../../components/QuestionRenderer';
import { LeftSection } from '../../components/LeftSection';
import { RightSection } from '../../components/RightSection';
import { step4Hero, step4Questions } from '../../config/step4Config';

export const Step4 = ({ onPrev, onNext }) => {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col min-h-0 w-full m-0 p-0">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] xl:grid-cols-[3.8fr_6.2fr] gap-[clamp(1rem,3vw,3rem)] items-stretch flex-1 min-h-0 w-full p-0 overflow-hidden">
          <LeftSection>
            <HeroSection config={step4Hero} />
          </LeftSection>
          <RightSection>
            <QuestionRenderer 
              onNext={onNext} 
              onPrev={onPrev} 
              questions={step4Questions} 
              titleHighlight="Tell us"
              titleRest="about yourself"
            />
          </RightSection>
        </div>
      </main>
    </>
  );
};
