import React from 'react';
import { motion } from 'framer-motion';
import groomCard from '../../../../assets/images/cards/groom-card.png';
import brideCard from '../../../../assets/images/cards/bride-card.png';

export const CardSelector = ({ selectedRole, onSelectRole }) => {
  return (
    <div className="relative flex flex-row justify-start items-center gap-[clamp(0.5rem,2vw,2rem)] w-full mb-[clamp(0.8rem,2vh,1.5rem)] mt-0 pt-0 pb-2 pr-2 pl-0 lg:pt-0 lg:pb-4 lg:pr-4 rounded-xl">
      {/* Groom Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className={`relative w-[clamp(90px,42%,240px)] cursor-pointer transition-all duration-300 flex items-center justify-center origin-left ${selectedRole === 'groom' ? 'scale-110 z-10' : 'scale-100 opacity-60 hover:opacity-90 z-0'
          }`}
        onClick={() => onSelectRole('groom')}
      >
        {/* Smooth Radiating Glow */}
        <div className={`absolute inset-4 bg-[#B58E3A] rounded-[2rem] blur-xl transition-all duration-700 pointer-events-none ${selectedRole === 'groom' ? 'opacity-60 scale-100' : 'opacity-0 scale-90'}`}></div>

        <img
          src={groomCard}
          alt="Groom"
          className="relative z-10 w-full h-auto max-h-[18vh] sm:max-h-[24vh] lg:max-h-[30vh] object-contain object-left transition-all duration-500 drop-shadow-[2px_4px_12px_rgba(0,0,0,0.15)]"
        />
      </motion.div>

      {/* Bride Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className={`relative w-[clamp(90px,42%,240px)] cursor-pointer transition-all duration-300 flex items-center justify-center origin-left ${selectedRole === 'bride' ? 'scale-110 z-10' : 'scale-100 opacity-60 hover:opacity-90 z-0'
          }`}
        onClick={() => onSelectRole('bride')}
      >
        {/* Smooth Radiating Glow */}
        <div className={`absolute inset-4 bg-[#B58E3A] rounded-[2rem] blur-xl transition-all duration-700 pointer-events-none ${selectedRole === 'bride' ? 'opacity-60 scale-100' : 'opacity-0 scale-90'}`}></div>

        <img
          src={brideCard}
          alt="Bride"
          className="relative z-10 w-full h-auto max-h-[18vh] sm:max-h-[24vh] lg:max-h-[30vh] object-contain object-left transition-all duration-500 drop-shadow-[2px_4px_12px_rgba(0,0,0,0.15)]"
        />
      </motion.div>
    </div>
  );
};
