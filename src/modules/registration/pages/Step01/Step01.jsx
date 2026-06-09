import React from 'react';
import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { QuestionRenderer } from '../../components/QuestionRenderer';
import { LeftSection } from '../../components/LeftSection';
import { RightSection } from '../../components/RightSection';
import { step1Config } from '../../config/step1Config';

export const Step1 = ({ onNext }) => {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col min-h-0 w-full m-0 p-0">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] xl:grid-cols-[3.8fr_6.2fr] gap-[clamp(1rem,3vw,3rem)] items-stretch flex-1 min-h-0 w-full p-0 overflow-hidden">
          <LeftSection>
            <HeroSection config={step1Config.hero} />
          </LeftSection>
          <RightSection>
            <QuestionRenderer onNext={onNext} />
          </RightSection>
        </div>
      </main>
    </>
  );
};
