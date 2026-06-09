import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRegistrationStore } from '../store/registrationStore';
import { getActiveFlow } from '../config/flowConfig';

export const StepNavigation = ({ onNext, onPrev, hideNext }) => {
  const { step, registrationData } = useRegistrationStore();
  const activeFlow = getActiveFlow(registrationData.profileFor);
  const totalSteps = activeFlow.length;

  let activeIndex = 0;
  if (step === 1) {
    activeIndex = 0;
  } else if (step === totalSteps) {
    activeIndex = 2;
  } else {
    activeIndex = 1;
  }

  return (
    <div className="flex items-center gap-[clamp(1rem,min(4vw,4vh),4rem)] m-0 p-0">
      <button 
        onClick={onPrev}
        className="w-[clamp(2.5rem,min(4vw,4vh),3.5rem)] h-[clamp(2.5rem,min(4vw,4vh),3.5rem)] rounded-full bg-[#fbf9f4] border border-[#f0e8dc] flex items-center justify-center text-[#B58E3A] hover:bg-white hover:shadow-md transition-all shadow-sm cursor-pointer"
      >
        <ArrowLeft className="w-[clamp(16px,min(2vw,2.5vh),24px)] h-[clamp(16px,min(2vw,2.5vh),24px)]" strokeWidth={2} />
      </button>

      <div className="flex gap-[clamp(0.2rem,min(0.5vw,0.5vh),0.5rem)] items-center">
        {Array.from({ length: 3 }).map((_, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div 
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${
                isActive 
                  ? "w-[clamp(1.5rem,2.5vw,2rem)] bg-luxury-gold" 
                  : "w-[clamp(0.3rem,0.6vw,0.5rem)] bg-luxury-gold/30"
              }`} 
            />
          );
        })}
      </div>

      {!hideNext ? (
        <div 
          onClick={onNext}
          className="rounded-full p-[2px] bg-gradient-to-br from-[#b8860b] via-[#FFF5EB] to-[#8b6508] drop-shadow-md hover:scale-110 transition-transform cursor-pointer"
        >
          <button className="w-[clamp(2.5rem,min(4vw,4vh),3.5rem)] h-[clamp(2.5rem,min(4vw,4vh),3.5rem)] rounded-full bg-luxury-navy flex items-center justify-center text-[#D6C5B3] hover:brightness-110 transition-all shadow-inner">
            <ArrowRight className="w-[clamp(16px,min(2vw,2.5vh),24px)] h-[clamp(16px,min(2vw,2.5vh),24px)]" />
          </button>
        </div>
      ) : (
        <div className="w-[clamp(2.5rem,min(4vw,4vh),3.5rem)]" />
      )}
    </div>
  );
};
