import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Input } from './Input';

export const CardFormModal = ({ 
  isOpen, 
  onClose, 
  icon: Icon, 
  title, 
  questions = [], 
  value, 
  onChange
}) => {
  const [localValue, setLocalValue] = useState(value || {});

  // Sync with prop when opened
  useEffect(() => {
    if (isOpen) {
      setLocalValue(value || {});
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    onChange(localValue);
    onClose();
  };

  const isFormComplete = questions.every(q => localValue[q.id]?.trim()?.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-[500px] bg-[#F8F6F0] rounded-[24px] shadow-2xl flex flex-col items-center p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh]">
        
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
        <h2 className="font-serif text-[20px] md:text-[24px] text-[#4A3671] font-medium text-center leading-tight mb-6">
          {title ? title.replace(/\n/g, ' ') : ""}
        </h2>

        {/* Questions Container */}
        <div className="w-full flex flex-col gap-5 overflow-y-auto custom-scrollbar px-2 pb-4">
          {questions.map((q) => (
            <Input
              key={q.id}
              label={q.title}
              value={localValue[q.id] || ""}
              onChange={(e) => setLocalValue(prev => ({ ...prev, [q.id]: e.target.value }))}
              placeholder="Your answer..."
            />
          ))}
        </div>

        {/* Save Button */}
        <div className="w-full mt-4 pt-4 border-t border-[#CBA557]/20 flex justify-center">
          <button
            onClick={handleSave}
            disabled={!isFormComplete}
            className={`px-8 py-3 rounded-full font-serif font-medium transition-all ${
              isFormComplete 
                ? "bg-[#4A3671] text-[#D6C5B3] hover:brightness-110 shadow-md"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Save Answers
          </button>
        </div>

      </div>
    </div>
  );
};
