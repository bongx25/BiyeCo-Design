import React from 'react';
import { cn } from "../utils";

export const Button = ({ 
  children, 
  variant = 'primary', 
  className, 
  icon: Icon,
  ...props 
}) => {
  if (variant === 'outline') {
    return (
      <button 
        className={cn(
          "flex items-center gap-2 px-6 py-2.5 rounded-full border border-luxury-gold text-[#4A3671] font-cormorant text-xs font-semibold tracking-wider hover:bg-luxury-gold/10 transition-colors",
          className
        )}
        {...props}
      >
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </button>
    );
  }

  if (variant === 'gradient') {
    return (
      <button 
        className={cn("group flex items-center justify-center gap-[clamp(0.4rem,0.8vw,0.8rem)] bg-[#4A3671] px-[clamp(0.6rem,1.2vw,1.2rem)] py-[clamp(0.3rem,0.6vh,0.5rem)] rounded-full font-cormorant text-[clamp(8px,0.9vw,11px)] font-bold tracking-[0.15em] hover:bg-[#4A3671]/95 transition-all min-w-[clamp(100px,10vw,140px)] shadow-md", className)}
        {...props}
      >
        <span className="bg-gradient-to-r from-[#D6C5B3] via-[#FFF5EB] to-[#D6C5B3] text-transparent bg-clip-text">
          {children}
        </span>
        {Icon && (
          <div className="bg-gradient-to-r from-[#D6C5B3] to-[#FFF5EB] text-[#4A3671] rounded-full p-[clamp(4px,0.6vw,6px)] group-hover:translate-x-1 transition-transform">
            <Icon className="w-[clamp(10px,1vw,14px)] h-[clamp(10px,1vw,14px)]" />
          </div>
        )}
      </button>
    );
  }
  
  if (variant === 'icon-round') {
    return (
      <button 
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center transition-all",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button className={cn(
      variant === 'primary' 
        ? "bg-[#4A3671] text-[#FFF5EB] px-6 py-3 rounded-[14px] font-serif font-semibold hover:brightness-110 transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed" 
        : "", 
      className
    )} {...props}>
      {children}
    </button>
  );
};
