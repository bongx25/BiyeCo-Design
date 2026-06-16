import React, { useEffect, useState } from 'react';
import { X, ChevronUp, ChevronDown } from 'lucide-react';

export const CardDropdownModal = ({
  isOpen,
  onClose,
  icon: Icon,
  title,
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  isMulti = false
}) => {
  const [isListOpen, setIsListOpen] = useState(true);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Format title for subtitle
  const subtitleLabel = title ? title.replace(/\n/g, ' ').toLowerCase() : "";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 bg-black/40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-[400px] bg-[#F8F6F0] rounded-[24px] shadow-2xl flex flex-col items-center p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#A67C00] hover:bg-[#A67C00]/10 rounded-full transition-colors"
        >
          <X className="w-5 h-5" strokeWidth={2} />
        </button>

        {/* Top Icon */}
        <div className="w-[64px] h-[64px] rounded-full border-[2.5px] border-[#CBA557]/70 flex items-center justify-center bg-transparent mb-4 shadow-[0_4px_12px_rgba(203,165,87,0.15)] shrink-0">
          {Icon && <Icon className="w-[30px] h-[30px] text-[#A67C00] fill-[#A67C00]/20" strokeWidth={2.5} />}
        </div>

        {/* Title */}
        <h2 className="font-serif text-[20px] md:text-[24px] text-[#4A3671] font-medium text-center leading-tight mb-1">
          {title ? title.replace(/\n/g, ' ') : ""}
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-[13px] md:text-[14px] text-luxury-charcoal/70 mb-6">
          Select your {subtitleLabel}
        </p>

        {/* Custom Dropdown List Container */}
        <div className="w-full bg-transparent border border-[#CBA557]/30 rounded-[12px] shadow-sm flex flex-col overflow-hidden">

          {/* List Header / Trigger */}
          <button
            onClick={() => setIsListOpen(!isListOpen)}
            className="w-full flex items-center justify-between px-4 py-3 bg-transparent border-b border-[#CBA557]/30 text-left hover:bg-[#CBA557]/5 transition-colors"
          >
            <span className="font-sans text-[14px] text-luxury-charcoal/90 font-medium">
              {placeholder}
            </span>
            {isListOpen ? (
              <ChevronUp className="w-5 h-5 text-luxury-charcoal/70" />
            ) : (
              <ChevronDown className="w-5 h-5 text-luxury-charcoal/70" />
            )}
          </button>

          {/* Options List */}
          {isListOpen && (
            <div className="flex flex-col max-h-[250px] overflow-y-auto custom-scrollbar">
              {/* Optional: repeat placeholder as an unselectable first option if matching image */}
              <div className="px-4 py-2.5 font-sans text-[13px] text-luxury-charcoal/50 bg-[#CBA557]/5 border-b border-[#CBA557]/20">
                {placeholder}
              </div>

              {options.map((opt) => {
                const isSelected = isMulti ? (Array.isArray(value) && value.includes(opt)) : value === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => {
                      if (isMulti) {
                        let newValue = Array.isArray(value) ? [...value] : [];
                        if (newValue.includes(opt)) {
                          newValue = newValue.filter(v => v !== opt);
                        } else {
                          newValue.push(opt);
                        }
                        onChange(newValue);
                      } else {
                        onChange(opt);
                        onClose();
                      }
                    }}
                    className={`w-full text-left px-4 py-2.5 font-sans text-[13px] md:text-[14px] transition-colors flex items-center justify-between ${isSelected
                        ? 'bg-[#CBA557]/15 text-[#A67C00] font-medium'
                        : 'text-luxury-charcoal hover:bg-[#CBA557]/10'
                      }`}
                  >
                    <span>{opt}</span>
                    {isSelected && isMulti && (
                      <span className="w-4 h-4 rounded-full bg-[#A67C00] flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
