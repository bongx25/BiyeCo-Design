import React from 'react';
import { motion } from 'framer-motion';
import { HeroContent } from './HeroContent';
import { TrustSection } from './TrustSection';

export const HeroSection = ({ config }) => {
  return (
    <div className="flex flex-col justify-start mt-0 pt-0 w-full pl-[clamp(0.5rem,2vw,2rem)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <HeroContent config={config} />
        <TrustSection config={config} />
      </motion.div>
    </div>
  );
};
