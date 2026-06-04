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
          className="bg-transparent border-none outline-none flex-1 text-[#333] font-sans text-[15px] placeholder:text-[#888]"
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
