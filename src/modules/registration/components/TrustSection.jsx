import React from 'react';
import { ShieldCheck } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, subtitle }) => (
  <div className="flex items-center gap-[clamp(0.4rem,0.8vw,0.8rem)] py-0.5">
    <div className="w-[clamp(24px,2.5vw,36px)] h-[clamp(24px,2.5vw,36px)] rounded-full flex items-center justify-center bg-luxury-ivory border border-luxury-gold/30 text-luxury-gold shadow-sm shrink-0">
      <Icon className="w-[clamp(12px,1.2vw,18px)] h-[clamp(12px,1.2vw,18px)]" strokeWidth={1.5} />
    </div>
    <div className="min-w-0">
      <h4 className="font-serif text-[clamp(11px,1vw,14px)] font-semibold text-luxury-navy truncate">{title}</h4>
      <p className="font-serif text-[clamp(9px,0.8vw,11px)] text-luxury-charcoal/90 truncate">{subtitle}</p>
    </div>
  </div>
);

export const TrustSection = ({ config }) => {
  const { trustItems, verifiedText, verifiedSubText } = config;

  return (
    <div className="hidden lg:block mt-[clamp(0.5rem,1.5vh,1.5rem)] max-w-[85%]">
      <p className="flex items-center gap-2 text-[clamp(9px,0.9vw,12px)] font-serif font-medium text-luxury-navy mb-[clamp(0.4rem,1vh,0.8rem)] uppercase tracking-wider whitespace-nowrap">
        <ShieldCheck className="w-[clamp(12px,1.2vw,16px)] h-[clamp(12px,1.2vw,16px)] text-luxury-gold shrink-0" />
        {verifiedText} <span className="mx-1 text-luxury-gold/50">|</span> {verifiedSubText}
      </p>

      <div className="space-y-[clamp(4px,1vh,8px)] max-w-full overflow-hidden">
        {trustItems.map(item => (
          <FeatureItem 
            key={item.id} 
            icon={item.icon} 
            title={item.title} 
            subtitle={item.subtitle} 
          />
        ))}
      </div>
    </div>
  );
};
