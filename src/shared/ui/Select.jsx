import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from "../utils";

export const Select = ({
  label,
  value,
  onChange,
  options = [],
  placeholder,
  error,
  disabled,
  className,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col gap-[clamp(4px,min(0.8vh,0.8vw),10px)] text-left w-full", className)}>
      {label && (
        <label className="font-serif text-luxury-navy text-[clamp(0.75rem,1.2vw,1.0rem)] font-normal">
          {label}
        </label>
      )}
      <div 
        className={cn(
          "relative flex items-center bg-[#FDFCFB] rounded-[clamp(8px,min(1vw,1vh),14px)] px-[clamp(0.8rem,min(1.8vw,2.5vh),1.5rem)] py-[clamp(0.4rem,min(1.5vh,1.5vw),1.2rem)] border transition-all duration-200",
          error ? "border-red-400/80" : "border-[#CBA557] focus-within:border-[#967634]",
          disabled && "opacity-60 cursor-not-allowed bg-gray-50"
        )}
      >
        <select 
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={cn(
            "w-full appearance-none bg-transparent border-none outline-none flex-1 font-sans text-[clamp(15px,min(1.8vw,2vh),18px)] cursor-pointer",
            !value ? "text-[#888]" : "text-[#333]"
          )}
          {...props}
        >
          <option value="" disabled hidden>{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="text-[#333]">
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-[clamp(4px,min(0.5vw,0.8vh),8px)] top-1/2 -translate-y-1/2 w-[clamp(12px,min(1.2vw,1.5vh),16px)] h-[clamp(12px,min(1.2vw,1.5vh),16px)] text-[#333] pointer-events-none" strokeWidth={2} />
      </div>
      {error && (
        <span className="text-red-500/90 text-[clamp(10px,1vw,12px)] ml-2 font-medium">
          {error}
        </span>
      )}
    </div>
  );
};
