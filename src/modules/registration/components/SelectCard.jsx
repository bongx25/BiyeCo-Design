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
      className="flex flex-col items-center bg-transparent border-[2.5px] border-[#CBA557]/60 rounded-[16px] p-[clamp(12px,min(1.5vh,1.5vw),20px)] shadow-[0_10px_15px_-3px_rgba(120,90,0,0.25),0_4px_6px_-2px_rgba(120,90,0,0.15),inset_0_2px_10px_rgba(255,255,255,0.5)] transition-all duration-300 w-full h-full min-h-[clamp(220px,min(32vh,30vw),300px)] text-left cursor-pointer group hover:border-[#CBA557]/80 hover:shadow-[0_16px_24px_-4px_rgba(120,90,0,0.35),0_6px_10px_-2px_rgba(120,90,0,0.2),inset_0_2px_10px_rgba(255,255,255,0.7)]"
    >
      
      {/* Centered Content Wrapper */}
      <div className="flex flex-col items-center justify-center flex-1 w-full pointer-events-none">
        {/* Icon */}
        <div className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] rounded-full border-[2.5px] border-[#CBA557]/70 flex items-center justify-center bg-transparent mb-3 sm:mb-5 shadow-[0_8px_16px_rgba(166,124,0,0.25)] shrink-0 group-hover:scale-105 transition-transform">
          <Icon className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] text-[#A67C00] fill-[#A67C00]/20" strokeWidth={2.5} />
        </div>

        {/* Title */}
        <h3 className="font-serif text-center text-[14px] sm:text-[16px] leading-[1.2] text-[#1A2A3A] font-medium whitespace-pre-line">
          {title}
        </h3>
      </div>

      {/* Select Dropdown Area (Divider Line) */}
      <div className="relative w-full mt-4 pt-3 sm:pt-4 shrink-0 bg-transparent border-t-[1.5px] border-[#CBA557]/40 transition-all flex items-center justify-between">
        <div className="flex-1 pr-4 font-sans text-[12px] sm:text-[13px] text-luxury-charcoal/90 truncate">
          {value || <span className="text-luxury-charcoal/50">{placeholder}</span>}
        </div>
        
        {/* Custom Chevron in a circle */}
        <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] shrink-0 rounded-full border-[2px] border-[#CBA557]/70 flex items-center justify-center bg-transparent shadow-[0_2px_8px_rgba(203,165,87,0.15)] z-0 transition-transform group-hover:bg-[#CBA557]/5">
          <ChevronDown className="w-4 h-4 text-[#A67C00]" strokeWidth={2.5} />
        </div>
      </div>
    </button>
  );
};
