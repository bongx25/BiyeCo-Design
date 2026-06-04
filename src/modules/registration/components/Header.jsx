import React from 'react';
import logo from "../../../assets/images/branding/logo.png";

export const Header = () => {
  return (
    <nav className="relative flex items-center justify-start pt-0 pb-[clamp(0.2rem,0.8vh,0.5rem)] w-full shrink-0 z-50">
      <div className="flex items-center gap-2 -ml-[clamp(10px,2vw,24px)]">
        <img src={logo} alt="BiyeCo Logo" className="h-[clamp(55px,9vh,110px)] object-contain" />
      </div>
    </nav>
  );
};
