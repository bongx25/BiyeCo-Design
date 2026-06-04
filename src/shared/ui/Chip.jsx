import React from 'react';
import { cn } from "../utils";

export const Chip = ({ 
  label, 
  icon: Icon, 
  active,
  className,
  onClick,
  ...props 
}) => {
  return (
    <button 
      className={cn(
        "group flex items-center gap-[clamp(0.3rem,0.8vw,0.6rem)] px-[clamp(0.8rem,1.5vw,1.5rem)] py-[clamp(0.4rem,0.8vh,0.8rem)] rounded-[2rem] border font-cormorant text-[clamp(12px,1.4vw,16px)] font-semibold tracking-wide hover:-translate-y-0.5 transition-all duration-300 cursor-pointer whitespace-nowrap shadow-[0_0px_15px_rgba(210,195,170,0.6)] hover:shadow-[0_0px_20px_rgba(210,195,170,0.8)]",
        active 
          ? "bg-luxury-navy border-luxury-navy text-[#FFF5EB] shadow-[0_4px_15px_rgba(26,38,57,0.35)]" 
          : "bg-[#F5EBE1] border-[#E8D9C8] hover:bg-luxury-navy hover:border-luxury-navy text-[#1A2639]",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {Icon && (
        <Icon 
          className={cn(
            "w-[clamp(14px,1.5vw,18px)] h-[clamp(14px,1.5vw,18px)] transition-colors shrink-0",
            active ? "text-[#E8D9C8]" : "text-[#B58E3A] group-hover:text-[#D6C5B3]"
          )}
          strokeWidth={1.5} 
        />
      )}
      <span className={cn(
        "transition-colors",
        active ? "text-[#FFF5EB]" : "text-[#1A2639] group-hover:text-[#FFF5EB]"
      )}>
        {label}
      </span>
    </button>
  );
};
