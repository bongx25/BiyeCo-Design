import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export const CardRangeModal = ({
  isOpen,
  onClose,
  icon: Icon,
  title,
  value,
  onChange,
  minBound = 18,
  maxBound = 70,
  step = 1,
  formatLabel = (v) => v
}) => {
  const [minVal, setMinVal] = useState(value?.min || minBound);
  const [maxVal, setMaxVal] = useState(value?.max || maxBound);

  useEffect(() => {
    if (isOpen) {
      setMinVal(value?.min || minBound);
      setMaxVal(value?.max || maxBound);
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
    onChange({ min: minVal, max: maxVal });
    onClose();
  };

  const percent1 = ((minVal - minBound) / (maxBound - minBound)) * 100;
  const percent2 = ((maxVal - minBound) / (maxBound - minBound)) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity" onClick={onClose} />
      
      <div className="relative w-full max-w-[400px] bg-[#F8F6F0] rounded-[24px] shadow-2xl flex flex-col items-center p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#A67C00] hover:bg-[#A67C00]/10 rounded-full transition-colors">
          <X className="w-5 h-5" strokeWidth={2} />
        </button>

        <div className="w-[64px] h-[64px] rounded-full border-[2.5px] border-[#CBA557]/70 flex items-center justify-center bg-transparent mb-4 shadow-[0_4px_12px_rgba(203,165,87,0.15)] shrink-0">
          {Icon && <Icon className="w-[30px] h-[30px] text-[#A67C00] fill-[#A67C00]/20" strokeWidth={2.5} />}
        </div>

        <h2 className="font-serif text-[20px] md:text-[24px] text-[#4A3671] font-medium text-center leading-tight mb-8">
          {title ? title.replace(/\n/g, ' ') : ""}
        </h2>

        {/* Display values */}
        <div className="w-full flex justify-between items-center px-2 mb-6">
          <div className="text-center w-1/3">
            <span className="block text-[12px] text-luxury-charcoal/60 uppercase tracking-wider mb-1">Minimum</span>
            <span className="font-serif text-[20px] text-[#A67C00] font-medium">{formatLabel(minVal)}</span>
          </div>
          <div className="h-[2px] flex-1 mx-4 bg-[#CBA557]/30" />
          <div className="text-center w-1/3">
            <span className="block text-[12px] text-luxury-charcoal/60 uppercase tracking-wider mb-1">Maximum</span>
            <span className="font-serif text-[20px] text-[#A67C00] font-medium">{formatLabel(maxVal)}</span>
          </div>
        </div>

        {/* Dual Slider */}
        <div className="relative w-full h-[30px] flex items-center mt-2 px-2">
          {/* Background track */}
          <div className="absolute left-2 right-2 h-1.5 bg-[#E5DCC5] rounded-full" />
          {/* Active track */}
          <div 
            className="absolute h-1.5 bg-[#CBA557] rounded-full" 
            style={{ left: `calc(0.5rem + ${percent1}% * 0.9)`, width: `calc(${percent2 - percent1}% * 0.9)` }}
          />

          <input 
            type="range"
            min={minBound}
            max={maxBound}
            step={step}
            value={minVal}
            onChange={(e) => {
              const val = Math.min(Number(e.target.value), maxVal - step);
              setMinVal(val);
            }}
            className="absolute left-0 right-0 h-1.5 w-full appearance-none pointer-events-none bg-transparent dual-slider z-10"
          />
          <input 
            type="range"
            min={minBound}
            max={maxBound}
            step={step}
            value={maxVal}
            onChange={(e) => {
              const val = Math.max(Number(e.target.value), minVal + step);
              setMaxVal(val);
            }}
            className="absolute left-0 right-0 h-1.5 w-full appearance-none pointer-events-none bg-transparent dual-slider z-20"
          />
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .dual-slider::-webkit-slider-thumb {
            pointer-events: auto;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #F8F6F0;
            border: 2.5px solid #CBA557;
            cursor: pointer;
            -webkit-appearance: none;
            box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          }
          .dual-slider::-moz-range-thumb {
            pointer-events: auto;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #F8F6F0;
            border: 2.5px solid #CBA557;
            cursor: pointer;
            box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          }
        `}} />

        <div className="w-full mt-10 pt-4 border-t border-[#CBA557]/20 flex justify-end">
          <button
            onClick={handleSave}
            className="px-8 py-3 rounded-full font-serif font-medium transition-all bg-[#4A3671] text-[#D6C5B3] hover:brightness-110 shadow-md"
          >
            Confirm Range
          </button>
        </div>

      </div>
    </div>
  );
};
