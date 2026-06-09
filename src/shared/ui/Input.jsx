import React from 'react';
import { cn } from "../utils";
import { User, Mail, Phone, Lock, Calendar, Search } from 'lucide-react'; // Mapping helper if needed, but we'll accept icon as prop

export const Input = ({
  label,
  icon: Icon,
  type = 'text',
  placeholder,
  value,
  onChange,
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
        {Icon && (
          <Icon className={cn(
            "w-5 h-5 mr-3 shrink-0 transition-colors",
            error ? "text-red-400/80" : "text-[#CBA557]"
          )} strokeWidth={1.5} />
        )}
        <input 
          type={type} 
          placeholder={placeholder} 
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="bg-transparent border-none outline-none flex-1 text-[#333] font-sans text-[clamp(15px,min(1.8vw,2vh),18px)] placeholder:text-[#888]"
          {...props}
        />
      </div>
      {error && (
        <span className="text-red-500/90 text-[clamp(10px,1vw,12px)] ml-2 font-medium">
          {error}
        </span>
      )}
    </div>
  );
};
