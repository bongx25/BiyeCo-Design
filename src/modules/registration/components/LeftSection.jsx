import React from 'react';

export const LeftSection = ({ children }) => {
  return (
    <div className="w-full h-full min-h-0 min-w-0 flex flex-col pl-[clamp(4rem,min(8vh,8vw),8rem)] lg:pl-[clamp(7rem,min(10vw,12vh),12rem)] pt-[clamp(0.5rem,min(1.5vh,1vw),1.5rem)] pb-[clamp(3rem,min(6vh,6vw),6rem)] pr-[clamp(1rem,min(2vw,2vh),2rem)]">
      {children}
    </div>
  );
};
