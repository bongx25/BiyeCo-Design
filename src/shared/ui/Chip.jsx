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
    <div 
      className={cn(
        "rounded-[2rem] transition-all duration-300 hover:-translate-y-0.5 inline-block p-[1px]",
        active 
          ? "bg-gradient-to-br from-[#b8860b] via-[#FFF5EB] to-[#8b6508] shadow-md" 
          : "bg-transparent shadow-sm hover:shadow-md",
        className
      )}
    >
      <button 
        className={cn(
          "w-full h-full group flex items-center justify-center gap-[clamp(0.3rem,min(0.6vw,0.6vh),0.8rem)] px-[clamp(0.6rem,min(1.4vw,2vh),1.4rem)] py-[clamp(0.2rem,min(0.8vh,0.8vw),0.8rem)] rounded-[2rem] font-cormorant text-[clamp(14px,min(1.6vw,1.8vh),18px)] font-semibold tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap",
          active 
            ? "bg-luxury-navy text-[#FFF5EB] border border-transparent" 
            : "bg-[#F5EBE1] border border-[#E8D9C8] hover:bg-luxury-navy hover:border-luxury-navy text-[#1A2639]"
        )}
        onClick={onClick}
        {...props}
      >
        {Icon && (
          <Icon 
            className={cn(
              "w-[clamp(14px,min(1.7vw,1.7vh),20px)] h-[clamp(14px,min(1.7vw,1.7vh),20px)] transition-colors shrink-0",
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
    </div>
  );
};
