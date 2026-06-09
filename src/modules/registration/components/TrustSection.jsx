import React from 'react';
import { ShieldCheck } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, subtitle }) => (
  <div className="flex items-center gap-[clamp(0.4rem,min(1vw,1.2vh),1rem)] py-[clamp(2px,min(0.4vh,0.4vw),4px)]">
    <div className="w-[clamp(32px,min(3.5vw,4.5vh),52px)] h-[clamp(32px,min(3.5vw,4.5vh),52px)] rounded-full flex items-center justify-center bg-luxury-ivory border border-luxury-gold/30 text-luxury-gold shadow-sm shrink-0">
      <Icon className="w-[clamp(18px,min(1.8vw,2vh),28px)] h-[clamp(18px,min(1.8vw,2vh),28px)]" strokeWidth={1.5} />
    </div>
    <div className="flex flex-col text-left">
      <h4 className="font-serif text-[clamp(13px,min(1.5vw,2vh),22px)] font-semibold text-luxury-navy truncate">{title}</h4>
      <p className="font-serif text-[clamp(11px,min(1.2vw,1.6vh),17px)] text-luxury-charcoal/90 truncate">{subtitle}</p>
    </div>
  </div>
);

export const TrustSection = ({ config }) => {
  const { trustItems = [], verifiedText, verifiedSubText } = config || {};

  if (!trustItems || trustItems.length === 0) return null;

  return (
    <div className="hidden lg:block mt-[clamp(0.2rem,min(1.5vh,1vw),1.5rem)] w-full">

      <div className="space-y-[clamp(2px,min(1vh,0.5vw),8px)] max-w-full overflow-hidden">
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
