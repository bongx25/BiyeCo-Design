import React from 'react';
import { HeartHandshake, ChevronRight } from 'lucide-react';
import { Button } from '../../../shared/ui/Button';
export const HeroContent = ({ config }) => {
  const { eyebrow, titleLines, description, buttonText } = config;

  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <h2 className="font-cursive text-[clamp(1.4rem,min(3.8vw,4.8vh),3rem)] text-luxury-gold mb-[-6px] ml-0 font-normal tracking-wide">
          {eyebrow}
        </h2>
        <h1 className="font-serif text-[clamp(2.2rem,min(5.2vw,6.5vh),4.5rem)] leading-[1.05] text-luxury-navy font-semibold tracking-tight">
          {titleLines[0]}<br />{titleLines[1]}
        </h1>

        <div className="flex items-center gap-[clamp(4px,min(1vh,0.5vw),16px)] my-[clamp(0.2rem,min(1.5vh,1vw),1.5rem)] w-full">
          <div className="h-px bg-luxury-gold flex-1" />
          <HeartHandshake className="w-[clamp(12px,min(1.8vw,2vh),24px)] h-[clamp(12px,min(1.8vw,2vh),24px)] text-luxury-gold shrink-0" />
          <div className="h-px bg-luxury-gold flex-1" />
        </div>
      </div>

      <p className="font-serif text-luxury-navy text-[clamp(14px,min(1.5vw,2vh),20px)] mb-[clamp(0.5rem,min(2vh,1vw),3rem)] leading-relaxed font-medium whitespace-pre-line w-full">
        Meaningful connections.<br />Built on trust, values & tradition.
      </p>
    </div>
  );
};
