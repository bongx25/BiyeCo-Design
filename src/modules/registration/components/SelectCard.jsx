import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../../shared/utils';

export const SelectCard = ({ 
  icon: Icon, 
  title, 
  options = [], 
  value, 
  onChange,
  placeholder = ""
}) => {
  return (
    <div className="flex flex-col items-center bg-transparent border-[1.5px] border-[#CBA557]/50 rounded-[24px] p-[clamp(12px,min(1.5vh,1.5vw),20px)] shadow-[0_8px_30px_rgba(166,124,0,0.15),0_4px_10px_rgba(166,124,0,0.08),inset_0_2px_10px_rgba(255,255,255,0.5)] hover:shadow-[0_12px_40px_rgba(166,124,0,0.3),0_6px_15px_rgba(166,124,0,0.15),inset_0_2px_10px_rgba(255,255,255,0.8)] hover:border-[#CBA557]/80 transition-all duration-300 w-full h-full min-h-[clamp(180px,min(26vh,24vw),240px)]">
      
      {/* Icon */}
      <div className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] rounded-full border-[2.5px] border-[#CBA557]/70 flex items-center justify-center bg-transparent mt-1 sm:mt-2 mb-2 sm:mb-4 shadow-[0_4px_12px_rgba(203,165,87,0.15)] shrink-0">
        <Icon className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] text-[#A67C00] fill-[#A67C00]/20" strokeWidth={2.5} />
      </div>

      {/* Title */}
      <h3 className="font-serif text-center text-[14px] sm:text-[16px] leading-[1.2] text-[#1A2A3A] font-medium mb-auto whitespace-pre-line">
        {title}
      </h3>

      {/* Select Dropdown Area (Divider Line) */}
      <div className="relative w-full mt-4 pt-3 sm:pt-4 shrink-0 bg-transparent border-t-[1.5px] border-[#CBA557]/40 transition-all">
        <select
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-full appearance-none bg-transparent pr-10 font-sans text-[12px] sm:text-[13px] text-luxury-charcoal/90 cursor-pointer outline-none focus:ring-0 z-10 relative"
        >
          <option value="" disabled hidden>{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        
        {/* Custom Chevron in a circle */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 mt-1.5 sm:mt-2 w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] rounded-full border-[2px] border-[#CBA557]/70 flex items-center justify-center pointer-events-none bg-transparent shadow-[0_2px_8px_rgba(203,165,87,0.15)] z-0">
          <ChevronDown className="w-4 h-4 text-[#A67C00]" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
};
