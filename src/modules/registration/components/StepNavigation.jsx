import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const StepNavigation = ({ onNext, onPrev }) => {
  return (
    <div className="flex items-center gap-[clamp(1rem,4vw,4rem)] mt-[clamp(0.5rem,2vh,2rem)]">
      <button 
        onClick={onPrev}
        className="w-[clamp(2rem,3vw,3rem)] h-[clamp(2rem,3vw,3rem)] rounded-full bg-[#fbf9f4] border border-[#f0e8dc] flex items-center justify-center text-[#B58E3A] hover:bg-white hover:shadow-md transition-all shadow-sm cursor-pointer"
      >
        <ArrowLeft className="w-[clamp(14px,1.5vw,20px)] h-[clamp(14px,1.5vw,20px)]" strokeWidth={2} />
      </button>

      <div className="flex gap-[clamp(0.2rem,0.5vw,0.5rem)] items-center">
        <div className="w-[clamp(1.5rem,2.5vw,2rem)] h-1 rounded-full bg-luxury-gold" />
        <div className="w-[clamp(0.3rem,0.6vw,0.5rem)] h-1 rounded-full bg-luxury-gold/30" />
        <div className="w-[clamp(0.3rem,0.6vw,0.5rem)] h-1 rounded-full bg-luxury-gold/30" />
        <div className="w-[clamp(0.3rem,0.6vw,0.5rem)] h-1 rounded-full bg-luxury-gold/30" />
      </div>

      <div 
        onClick={onNext}
        className="rounded-full p-[2px] bg-gradient-to-br from-[#b8860b] via-[#FFF5EB] to-[#8b6508] drop-shadow-md hover:scale-110 transition-transform cursor-pointer"
      >
        <button className="w-[clamp(2rem,3vw,3rem)] h-[clamp(2rem,3vw,3rem)] rounded-full bg-luxury-navy flex items-center justify-center text-[#D6C5B3] hover:brightness-110 transition-all shadow-inner">
          <ArrowRight className="w-[clamp(14px,1.5vw,20px)] h-[clamp(14px,1.5vw,20px)]" />
        </button>
      </div>
    </div>
  );
};
