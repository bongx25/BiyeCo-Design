import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, CloudUpload, Heart, Lock, Check } from 'lucide-react';
import { StepNavigation } from '../../components/StepNavigation';
import { useRegistrationStore } from '../../store/registrationStore';

export const PhotoUploadRenderer = ({ onNext, onPrev }) => {
  const { registrationData, updateField } = useRegistrationStore();
  const [matches, setMatches] = useState('enable');
  const [privacy, setPrivacy] = useState('public');

  const handleNext = () => {
    // In a real app we'd check if a photo is uploaded or if we allow skipping
    onNext();
  };

  return (
    <div className="flex flex-col items-start justify-between w-full h-full mt-0 overflow-hidden pl-3 xl:pl-4 pr-[clamp(1.5rem,3vw,4rem)] pb-[clamp(1rem,2vh,2rem)] max-w-[780px] xl:max-w-[850px]">

      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-transparent border border-[#E8D9C8] rounded-[16px] xl:rounded-[20px] p-3 xl:p-4 flex items-center gap-3 xl:gap-4 shadow-[0_4px_20px_rgba(203,165,87,0.3)] mb-4 xl:mb-5 shrink-0"
      >
        <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full border border-[#CBA557]/50 flex items-center justify-center bg-white shrink-0 shadow-sm">
          <Shield className="w-5 h-5 xl:w-6 xl:h-6 text-[#4A3671]" />
        </div>
        <div className="flex flex-col">
          <span className="font-serif font-medium text-[#4A3671] text-sm xl:text-base">Upload one photo to begin.</span>
          <span className="font-serif text-[#4A3671]/80 text-xs xl:text-sm">More photos can be added based on your chosen plan.</span>
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-4 xl:gap-6 flex-1 min-h-0">

        {/* Left Column - Step 1 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative bg-transparent border border-[#E8D9C8] rounded-[24px] xl:rounded-[32px] p-5 xl:p-6 shadow-[0_8px_30px_rgba(203,165,87,0.35)] hover:shadow-[0_12px_40px_rgba(203,165,87,0.5)] transition-shadow flex flex-col h-full min-h-0"
        >
          {/* Step Badge */}
          <div className="absolute -top-3.5 -left-2 bg-[#4A3671] text-white text-[10px] xl:text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
            STEP 1
          </div>

          <div className="flex justify-between items-center mb-4 xl:mb-5 shrink-0">
            <div className="flex items-center gap-2 text-[#4A3671]">
              <CloudUpload className="w-5 h-5 xl:w-6 xl:h-6" />
              <span className="font-serif font-bold text-sm xl:text-base">Profile Photo</span>
            </div>
            <div className="bg-white border border-[#E8D9C8] rounded-full px-3 py-0.5 text-xs font-bold text-[#4A3671]/70 shadow-sm">
              0/1
            </div>
          </div>

          <div className="flex-1 bg-transparent border border-[#E8D9C8] rounded-[20px] xl:rounded-[24px] flex flex-col items-center justify-center p-6 xl:p-8 text-center shadow-[inset_0_2px_16px_rgba(203,165,87,0.25)] min-h-0">
            <div className="flex-1 flex flex-col items-center justify-center min-h-0">
              <CloudUpload className="w-16 h-16 xl:w-20 xl:h-20 text-[#A67C00]/50 mb-3 xl:mb-4" strokeWidth={1} />
              <h3 className="font-serif font-semibold text-lg xl:text-xl text-[#4A3671] mb-1">
                Upload {(!registrationData.profileFor || registrationData.profileFor === 'myself')
                  ? 'Your'
                  : (registrationData.role === 'bride' ? "Groom's" : registrationData.role === 'groom' ? "Bride's" : "Candidate's")} Photo
              </h3>
              <p className="font-serif text-xs xl:text-sm text-[#4A3671]/80 mb-5 xl:mb-6">Profiles with photos receive 5x more responses</p>

              <div className="flex flex-col gap-2.5 text-left w-full max-w-[240px] mx-auto">
                <div className="flex items-center gap-2.5 text-[13px] xl:text-sm text-[#4A3671]/80 font-serif">
                  <Check className="w-4 h-4 text-[#A67C00] shrink-0" /> JPG / PNG
                </div>
                <div className="flex items-center gap-2.5 text-[13px] xl:text-sm text-[#4A3671]/80 font-serif">
                  <Check className="w-4 h-4 text-[#A67C00] shrink-0" /> Clear face photo recommended
                </div>
                <div className="flex items-center gap-2.5 text-[13px] xl:text-sm text-[#4A3671]/80 font-serif">
                  <Check className="w-4 h-4 text-[#A67C00] shrink-0" /> You can change this later
                </div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-[#4A3671] to-[#6B4F9A] text-white px-8 py-3 rounded-full font-serif text-base xl:text-lg font-medium shadow-[0_8px_20px_rgba(203,165,87,0.3)] hover:shadow-[0_12px_24px_rgba(203,165,87,0.4)] transition-all active:scale-95 w-full max-w-[240px] mt-6 xl:mt-8 shrink-0">
              Upload Photo
            </button>
          </div>
        </motion.div>

        {/* Right Column - Steps 2 & 3 */}
        <div className="flex flex-col gap-4 xl:gap-5 h-full min-h-0">

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative bg-transparent border border-[#E8D9C8] rounded-[24px] xl:rounded-[32px] px-4 pb-4 pt-6 xl:px-5 xl:pb-5 xl:pt-7 shadow-[0_8px_30px_rgba(203,165,87,0.35)] hover:shadow-[0_12px_40px_rgba(203,165,87,0.5)] transition-shadow flex-1 flex flex-col justify-center min-h-0"
          >
            <div className="absolute -top-3.5 -left-2 bg-[#4A3671] text-white text-[10px] xl:text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
              STEP 2
            </div>

            <div className="flex items-start gap-2.5 mb-2 xl:mb-3 shrink-0">
              <div className="flex items-center justify-center shrink-0 mt-[2px] xl:mt-[3px]">
                <Heart className="w-4 h-4 xl:w-5 xl:h-5 text-[#4A3671]" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col justify-start min-w-0">
                <h3 className="font-serif font-bold text-[15px] xl:text-base text-[#4A3671] leading-tight mb-0.5 truncate">Daily Matches</h3>
                <p className="font-serif text-[11px] xl:text-[12px] text-[#4A3671]/80 leading-snug break-words">A clear photo helps people connect with you.</p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <label className={`flex items-center gap-3 p-3 xl:p-3.5 rounded-[16px] border cursor-pointer transition-colors ${matches === 'enable' ? 'bg-[#4A3671]/5 border-[#CBA557]/40 shadow-[inset_0_2px_8px_rgba(203,165,87,0.1)]' : 'bg-transparent border-transparent shadow-[0_4px_12px_rgba(203,165,87,0.1)]'}`}>
                <input type="radio" name="matches" checked={matches === 'enable'} onChange={() => setMatches('enable')} className="w-4 h-4 accent-[#4A3671] shrink-0" />
                <span className="font-serif text-[13px] xl:text-[14px] font-medium text-[#4A3671] truncate">Enable matches</span>
              </label>
              <label className={`flex items-center gap-3 p-3 xl:p-3.5 rounded-[16px] border cursor-pointer transition-colors ${matches === 'disable' ? 'bg-[#4A3671]/5 border-[#CBA557]/40 shadow-[inset_0_2px_8px_rgba(203,165,87,0.1)]' : 'bg-transparent border-transparent shadow-[0_4px_12px_rgba(203,165,87,0.1)]'}`}>
                <input type="radio" name="matches" checked={matches === 'disable'} onChange={() => setMatches('disable')} className="w-4 h-4 accent-[#4A3671] shrink-0" />
                <span className="font-serif text-[13px] xl:text-[14px] font-medium text-[#4A3671] truncate">Disable matches</span>
              </label>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative bg-transparent border border-[#E8D9C8] rounded-[24px] xl:rounded-[32px] px-4 pb-4 pt-6 xl:px-5 xl:pb-5 xl:pt-7 shadow-[0_8px_30px_rgba(203,165,87,0.35)] hover:shadow-[0_12px_40px_rgba(203,165,87,0.5)] transition-shadow flex-1 flex flex-col justify-center min-h-0"
          >
            <div className="absolute -top-3.5 -left-2 bg-[#4A3671] text-white text-[10px] xl:text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
              STEP 3
            </div>

            <div className="flex items-start gap-2.5 mb-2 xl:mb-3 shrink-0">
              <div className="flex items-center justify-center shrink-0 mt-[2px] xl:mt-[3px]">
                <Lock className="w-4 h-4 xl:w-5 xl:h-5 text-[#4A3671]" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col justify-start min-w-0">
                <h3 className="font-serif font-bold text-[15px] xl:text-base text-[#4A3671] leading-tight mb-0.5 truncate">Photo Privacy</h3>
                <p className="font-serif text-[11px] xl:text-[12px] text-[#4A3671]/80 leading-snug break-words">You stay in control of who can see it.</p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <label className={`flex items-center gap-3 p-3 xl:p-3.5 rounded-[16px] border cursor-pointer transition-colors ${privacy === 'public' ? 'bg-[#4A3671]/5 border-[#CBA557]/40 shadow-[inset_0_2px_8px_rgba(203,165,87,0.1)]' : 'bg-transparent border-transparent shadow-[0_4px_12px_rgba(203,165,87,0.1)]'}`}>
                <input type="radio" name="privacy" checked={privacy === 'public'} onChange={() => setPrivacy('public')} className="w-4 h-4 accent-[#4A3671] shrink-0" />
                <span className="font-serif text-[13px] xl:text-[14px] font-medium text-[#4A3671] truncate">Public</span>
              </label>
              <label className={`flex items-center gap-3 p-3 xl:p-3.5 rounded-[16px] border cursor-pointer transition-colors ${privacy === 'connections' ? 'bg-[#4A3671]/5 border-[#CBA557]/40 shadow-[inset_0_2px_8px_rgba(203,165,87,0.1)]' : 'bg-transparent border-transparent shadow-[0_4px_12px_rgba(203,165,87,0.1)]'}`}>
                <input type="radio" name="privacy" checked={privacy === 'connections'} onChange={() => setPrivacy('connections')} className="w-4 h-4 accent-[#4A3671] shrink-0" />
                <span className="font-serif text-[13px] xl:text-[14px] font-medium text-[#4A3671] truncate">Connections</span>
              </label>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="w-full shrink-0 flex justify-center lg:justify-start mt-4 xl:mt-6 pt-2">
        <StepNavigation onNext={handleNext} onPrev={onPrev} />
      </div>
    </div>
  );
};


