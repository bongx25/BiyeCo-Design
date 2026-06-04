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
    <div className={cn("flex flex-col gap-2 text-left w-full", className)}>
      {label && (
        <label className="font-serif text-luxury-navy text-[clamp(14px,1.2vw,16px)] ml-1">
          {label}
        </label>
      )}
      <div 
        className={cn(
          "relative flex items-center bg-[#FDFCFB] rounded-[14px] px-4 py-3.5 border transition-all duration-200",
          error ? "border-red-400/80" : "border-[#CBA557] focus-within:border-[#967634]",
          disabled && "opacity-60 cursor-not-allowed bg-gray-50"
        )}
      >
        <select 
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={cn(
            "w-full appearance-none bg-transparent border-none outline-none flex-1 font-sans text-[15px] cursor-pointer",
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
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#333] pointer-events-none" strokeWidth={2} />
      </div>
      {error && (
        <span className="text-red-500/90 text-[clamp(10px,1vw,12px)] ml-2 font-medium">
          {error}
        </span>
      )}
    </div>
  );
};
