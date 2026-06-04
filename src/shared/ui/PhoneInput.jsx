import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from "../utils";

export const PhoneInput = ({
  label,
  countryCodeValue,
  phoneNumberValue,
  onCountryCodeChange,
  onPhoneNumberChange,
  placeholder,
  error,
  disabled,
  className
}) => {
  const countryCodes = [
    { code: '+91', flag: '🇮🇳' },
    { code: '+1', flag: '🇺🇸' },
    { code: '+44', flag: '🇬🇧' },
    { code: '+61', flag: '🇦🇺' },
    { code: '+971', flag: '🇦🇪' }
  ];

  return (
    <div className={cn("flex flex-col gap-2 text-left w-full", className)}>
      {label && (
        <label className="font-serif text-luxury-navy text-[clamp(14px,1.2vw,16px)] ml-1">
          {label}
        </label>
      )}
      <div className="flex gap-3 w-full">
        {/* Country Code Selector */}
        <div 
          className={cn(
            "relative flex items-center bg-[#FDFCFB] rounded-[14px] px-3 py-3.5 border transition-all duration-200 w-[110px] shrink-0",
            error ? "border-red-400/80" : "border-[#CBA557] focus-within:border-[#967634]",
            disabled && "opacity-60 cursor-not-allowed bg-gray-50"
          )}
        >
          <select 
            value={countryCodeValue}
            onChange={(e) => onCountryCodeChange(e.target.value)}
            disabled={disabled}
            className="w-full appearance-none bg-transparent border-none outline-none flex-1 font-sans text-[15px] text-[#333] cursor-pointer"
          >
            {countryCodes.map((c) => (
              <option key={c.code} value={c.code} className="text-[#333]">
                {c.flag} {c.code}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#333] pointer-events-none" strokeWidth={2} />
        </div>

        {/* Phone Number Input */}
        <div 
          className={cn(
            "relative flex-1 flex items-center bg-[#FDFCFB] rounded-[14px] px-4 py-3.5 border transition-all duration-200",
            error ? "border-red-400/80" : "border-[#CBA557] focus-within:border-[#967634]",
            disabled && "opacity-60 cursor-not-allowed bg-gray-50"
          )}
        >
          <input
            type="tel"
            value={phoneNumberValue}
            onChange={(e) => onPhoneNumberChange(e.target.value.replace(/[^0-9]/g, ''))}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(
              "w-full bg-transparent border-none outline-none font-sans text-[15px]",
              !phoneNumberValue ? "text-[#888]" : "text-[#333]"
            )}
          />
        </div>
      </div>
      
      {error && (
        <span className="text-red-500/90 text-[clamp(10px,1vw,12px)] ml-2 font-medium">
          {error}
        </span>
      )}
    </div>
  );
};
