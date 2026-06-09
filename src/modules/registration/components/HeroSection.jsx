import React from 'react';
import { motion } from 'framer-motion';
import { HeroContent } from './HeroContent';
import { TrustSection } from './TrustSection';

export const HeroSection = ({ config }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex flex-col justify-start h-full w-full"
      >
        <HeroContent config={config} />
        <div className="mt-[clamp(0.5rem,min(2vh,1.5vw),2rem)]">
          <TrustSection config={config} />
        </div>
      </motion.div>
    </div>
  );
};
