import React from 'react';
import { HeartHandshake, ChevronRight } from 'lucide-react';
import { Button } from '../../../shared/ui/Button';
export const HeroContent = ({ config }) => {
  const { eyebrow, titleLines, description, buttonText } = config;

  return (
    <div className="flex flex-col w-full">
      <div className="w-fit">
        <h2 className="font-cursive text-[clamp(1.6rem,3.2vw,2.6rem)] text-luxury-gold mb-[-6px] ml-0 font-normal tracking-wide">
          {eyebrow}
        </h2>
        <h1 className="font-serif text-[clamp(1.8rem,3.5vw,3.2rem)] leading-[1.05] text-luxury-navy font-semibold tracking-tight">
          {titleLines[0]}<br />{titleLines[1]}
        </h1>

        <div className="flex items-center gap-4 my-[clamp(0.8rem,2vh,1.5rem)] w-full">
          <div className="h-px bg-luxury-gold flex-1" />
          <HeartHandshake className="w-[clamp(14px,1.8vw,24px)] h-[clamp(14px,1.8vw,24px)] text-luxury-gold shrink-0" />
          <div className="h-px bg-luxury-gold flex-1" />
        </div>
      </div>

      <p className="font-serif text-luxury-navy text-[clamp(14px,1.2vw,16px)] mb-[clamp(1.5rem,3vh,3rem)] leading-relaxed font-medium whitespace-pre-line w-full min-w-max">
        Meaningful connections.<br />Built on trust, values & tradition.
      </p>
    </div>
  );
};
