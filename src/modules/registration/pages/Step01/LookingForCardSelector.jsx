import React from 'react';
import { motion } from 'framer-motion';
import groomCard from '../../../../assets/images/cards/groom-card.png';
import brideCard from '../../../../assets/images/cards/bride-card.png';

export const CardSelector = ({ selectedRole, onSelectRole }) => {
  return (
    <div className="relative flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-[clamp(0.5rem,2vw,1.2rem)] w-full mb-[clamp(0.8rem,2vh,1.5rem)] mt-0">
      {/* Groom Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className={`relative w-[clamp(100px,25vw,170px)] sm:w-[clamp(85px,14vw,170px)] cursor-pointer transition-all duration-300 flex items-center justify-center ${
          selectedRole === 'groom' ? 'scale-[1.05] z-10' : 'scale-100 opacity-60 hover:opacity-90 z-0'
        }`}
        onClick={() => onSelectRole('groom')}
      >
        <img 
          src={groomCard} 
          alt="Groom" 
          className="w-full h-auto max-h-[18vh] sm:max-h-[24vh] lg:max-h-[30vh] object-contain transition-all duration-500"
          style={{
            filter: selectedRole === 'groom' 
              ? 'drop-shadow(0 0 20px rgba(184, 134, 11, 0.6))'
              : 'drop-shadow(0 8px 12px rgba(0,0,0,0.15))'
          }}
        />
      </motion.div>

      {/* Bride Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className={`relative w-[clamp(100px,25vw,170px)] sm:w-[clamp(85px,14vw,170px)] cursor-pointer transition-all duration-300 flex items-center justify-center ${
          selectedRole === 'bride' ? 'scale-[1.05] z-10' : 'scale-100 opacity-60 hover:opacity-90 z-0'
        }`}
        onClick={() => onSelectRole('bride')}
      >
        <img 
          src={brideCard} 
          alt="Bride" 
          className="w-full h-auto max-h-[18vh] sm:max-h-[24vh] lg:max-h-[30vh] object-contain transition-all duration-500"
          style={{
            filter: selectedRole === 'bride' 
              ? 'drop-shadow(0 0 20px rgba(184, 134, 11, 0.6))'
              : 'drop-shadow(0 8px 12px rgba(0,0,0,0.15))'
          }}
        />
      </motion.div>
    </div>
  );
};
