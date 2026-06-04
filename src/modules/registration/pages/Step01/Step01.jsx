import React from 'react';
import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { QuestionRenderer } from '../../components/QuestionRenderer';
import { step1Config } from '../../config/step1Config';

export const Step1 = ({ onNext }) => {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col justify-start min-h-0 w-full mt-[clamp(0.5rem,1vh,1.5rem)] lg:mt-[clamp(1rem,2vh,2rem)] mb-[clamp(0.5rem,1.5vh,1.5rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-[4.5fr_5.5fr] gap-[clamp(1rem,3vh,2.5rem)] lg:gap-[clamp(1rem,2.5vw,3rem)] items-start h-full w-full">
          <HeroSection config={step1Config.hero} />
          <QuestionRenderer onNext={onNext} />
        </div>
      </main>
    </>
  );
};
