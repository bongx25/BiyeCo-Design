import React from 'react';
import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { LeftSection } from '../../components/LeftSection';
import { RightSection } from '../../components/RightSection';
import { PhotoUploadRenderer } from './PhotoUploadRenderer';
import { step14Config } from '../../config/step14Config';

export const Step14 = ({ onNext, onPrev }) => {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col min-h-0 w-full m-0 p-0">
        <div className="grid grid-cols-1 lg:grid-cols-[3.5fr_6.5fr] xl:grid-cols-[3.2fr_6.8fr] gap-[clamp(1rem,3vw,3rem)] items-stretch flex-1 min-h-0 w-full p-0 overflow-hidden">
          <LeftSection className="!pl-[clamp(3rem,min(6vw,6vh),6rem)] lg:!pl-[clamp(5.5rem,min(8vw,8vh),8rem)]">
            <HeroSection config={step14Config.hero} />
          </LeftSection>
          <RightSection className="!pl-4 lg:!pl-6 xl:!pl-8">
            <PhotoUploadRenderer onNext={onNext} onPrev={onPrev} />
          </RightSection>
        </div>
      </main>
    </>
  );
};
