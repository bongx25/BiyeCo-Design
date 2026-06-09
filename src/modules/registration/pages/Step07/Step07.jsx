import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { LeftSection } from '../../components/LeftSection';
import { RightSection } from '../../components/RightSection';
import { StepNavigation } from '../../components/StepNavigation';
import { SelectCard } from '../../components/SelectCard';
import { step7Config } from '../../config/step7Config';
import { useRegistrationStore } from '../../store/registrationStore';
import { Button } from '../../../../shared/ui/Button';

export const Step7 = ({ onPrev, onNext }) => {
  const { registrationData, updateField } = useRegistrationStore();

  const isFormValid = step7Config.cards.every(card => registrationData[card.id]);

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col min-h-0 w-full m-0 p-0">
        <div className="grid grid-cols-1 lg:grid-cols-[3.8fr_6.2fr] xl:grid-cols-[3.5fr_6.5fr] gap-[clamp(0.5rem,2vw,1.5rem)] items-stretch flex-1 min-h-0 min-w-0 w-full p-0 overflow-hidden">
          <LeftSection>
            <HeroSection config={step7Config.hero} />
          </LeftSection>
          
          <RightSection className="!pl-0 lg:!pl-4 xl:!pl-8">
            <div className="flex flex-col h-full overflow-hidden p-0 m-0">
              <div className="flex flex-col w-full h-full max-w-[600px] mx-auto lg:mx-0 lg:ml-2 mt-2 lg:mt-4 gap-[clamp(0.5rem,min(1.5vh,1vw),1rem)] justify-between">
                
                {/* Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-[clamp(0.5rem,1.5vw,1rem)] w-full">
                  {step7Config.cards.map((card) => (
                    <SelectCard
                      key={card.id}
                      icon={card.icon}
                      title={card.title}
                      options={card.options}
                      value={registrationData[card.id]}
                      onChange={(val) => updateField(card.id, val)}
                    />
                  ))}
                </div>
              </div>
              
              {/* Bottom Navigation */}
              <div className="w-full shrink-0 flex justify-center lg:justify-start mt-auto pt-[clamp(0.5rem,min(2vh,2vw),1.5rem)] pb-2 lg:ml-8">
                <StepNavigation onPrev={onPrev} onNext={onNext} />
              </div>
              
            </div>
          </RightSection>
        </div>
      </main>
    </>
  );
};
