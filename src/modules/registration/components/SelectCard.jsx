import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../../shared/utils';

export const SelectCard = ({
  icon: Icon,
  title,
  value,
  onClick,
  placeholder = ""
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{ WebkitTapHighlightColor: 'transparent' }}
      className="flex flex-col items-center bg-[#f3e9df] border border-[#CBA557]/25 rounded-[16px] px-[clamp(12px,min(1.5vh,1.5vw),20px)] pt-[clamp(12px,min(1.5vh,1.5vw),20px)] pb-2 sm:pb-3 shadow-[3px_4px_8px_rgba(166,124,0,0.12)] transition-all duration-300 w-full h-full min-h-[clamp(210px,min(30vh,30vw),280px)] text-left cursor-pointer group hover:border-[#CBA557]/40 hover:shadow-[4px_6px_12px_rgba(166,124,0,0.15)] outline-none focus:outline-none focus-visible:outline-none focus:ring-0 active:outline-none"
    >

      {/* Top-aligned Content Wrapper to keep icon position fixed */}
      <div className="flex flex-col items-center justify-start pt-4 sm:pt-6 flex-1 w-full pointer-events-none">
        {/* Icon */}
        <div className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] rounded-full border border-[#CBA557]/30 flex items-center justify-center bg-transparent mb-3 sm:mb-5 shadow-[0_4px_8px_rgba(166,124,0,0.12)] shrink-0 group-hover:scale-105 transition-transform">
          <Icon className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] text-luxury-gold fill-luxury-gold/20" strokeWidth={2.5} />
        </div>

        {/* Title */}
        <h3 className="font-serif text-center text-[14px] sm:text-[16px] leading-[1.2] text-[#4A3671] font-medium whitespace-pre-line">
          {title}
        </h3>
      </div>

      {/* Select Dropdown Area (Card Box) */}
      <div className="relative w-full mt-auto shrink-0 bg-[#f3e9df] rounded-[12px] px-3 py-1.5 sm:px-4 sm:py-2 shadow-[0_2px_4px_rgba(166,124,0,0.08)] transition-all flex items-center justify-between group-hover:bg-[#f3e9df] group-hover:shadow-[0_3px_6px_rgba(166,124,0,0.12)]">
        <div className="flex-1 pr-3 font-sans text-[12px] sm:text-[13px] text-luxury-charcoal/90 truncate text-left font-medium">
          {value || <span className="text-luxury-charcoal/50 font-normal">{placeholder}</span>}
        </div>

        {/* Custom Chevron in a circle */}
        <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] shrink-0 rounded-full border-[1.5px] border-[#CBA557]/50 flex items-center justify-center bg-white/50 shadow-[0_2px_4px_rgba(203,165,87,0.1)] z-0 transition-transform group-hover:bg-[#CBA557]/10">
          <ChevronDown className="w-4 h-4 text-[#A67C00]" strokeWidth={2.5} />
        </div>
      </div>
    </button>
  );
};
