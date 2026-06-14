import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { LeftSection } from '../../components/LeftSection';
import { RightSection } from '../../components/RightSection';
import { StepNavigation } from '../../components/StepNavigation';
import { SelectCard } from '../../components/SelectCard';
import { CardDropdownModal } from '../../../../shared/ui/CardDropdownModal';
import { step13Config } from '../../config/step13Config';
import { useRegistrationStore } from '../../store/registrationStore';

export const Step13 = ({ onPrev, onNext }) => {
  const { registrationData, updateField } = useRegistrationStore();
  const [activeModalId, setActiveModalId] = useState(null);

  const isFormValid = step13Config.cards.every(card => {
    const val = registrationData[card.id];
    if (Array.isArray(val)) return val.length > 0;
    return !!val;
  });

  const activeCardConfig = activeModalId ? step13Config.cards.find(c => c.id === activeModalId) : null;

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col min-h-0 w-full m-0 p-0 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[3.8fr_6.2fr] xl:grid-cols-[3.5fr_6.5fr] gap-[clamp(0.5rem,2vw,1.5rem)] items-stretch flex-1 min-h-0 min-w-0 w-full p-0 overflow-hidden">
          <LeftSection>
            <HeroSection config={step13Config.hero} />
          </LeftSection>
          
          <RightSection className="!pl-0 lg:!pl-4 xl:!pl-8">
            <div className="flex flex-col h-full overflow-hidden p-0 m-0">
              <div className="flex flex-col w-full h-full max-w-[600px] mx-auto lg:mx-0 lg:ml-2 mt-2 lg:mt-4 gap-[clamp(0.5rem,min(1.5vh,1vw),1rem)] justify-between">
                
                {/* Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-[clamp(0.5rem,1.5vw,1rem)] w-full">
                  {step13Config.cards.map((card) => {
                    let displayValue = registrationData[card.id];
                    if (Array.isArray(displayValue)) {
                      displayValue = displayValue.join(', ');
                    }

                    return (
                      <SelectCard
                        key={card.id}
                        icon={card.icon}
                        title={card.title}
                        value={displayValue}
                        onClick={() => setActiveModalId(card.id)}
                      />
                    );
                  })}
                </div>
              </div>
              
              {/* Bottom Navigation */}
              <div className="w-full shrink-0 flex justify-center lg:justify-start mt-auto pt-[clamp(0.5rem,min(2vh,2vw),1.5rem)] pb-2 lg:ml-8">
                <StepNavigation onPrev={onPrev} onNext={onNext} hideNext={!isFormValid} />
              </div>
              
            </div>
          </RightSection>
        </div>
      </main>

      {/* Dynamic Dropdown Modal */}
      {activeCardConfig && (
        <CardDropdownModal
          isOpen={!!activeModalId}
          onClose={() => setActiveModalId(null)}
          icon={activeCardConfig.icon}
          title={activeCardConfig.title}
          options={activeCardConfig.options}
          value={registrationData[activeCardConfig.id]}
          onChange={(val) => updateField(activeCardConfig.id, val)}
          placeholder={`Select ${activeCardConfig.title.replace(/\n/g, ' ').toLowerCase()}`}
          isMulti={activeCardConfig.isMulti}
        />
      )}
    </>
  );
};
