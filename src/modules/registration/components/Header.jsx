import React from 'react';
import logo from "../../../assets/images/branding/logo.png";

export const Header = () => {
  return (
    <nav className="relative flex items-center justify-start pb-0 w-full shrink-0 z-50 -mb-[clamp(10px,1.5vh,20px)]">
      <div className="flex items-center gap-2 ml-[clamp(10px,3vw,32px)]">
        <img src={logo} alt="BiyeCo Logo" className="h-[clamp(50px,min(9vh,9vw),95px)] object-contain" />
      </div>
    </nav>
  );
};
