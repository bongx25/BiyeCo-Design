import React from 'react';

import mainBg from '../../../assets/images/backgrounds/behind-bg.jpeg';
import frameBg from '../../../assets/images/backgrounds/frame-bg.png';
import flowerBg from '../../../assets/images/backgrounds/flower.png';

export const RegistrationShell = ({ children }) => {
  return (
    <div
      className="w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden pl-[clamp(12px,min(2vw,2vh),24px)] pr-[clamp(0px,min(0.5vw,0.5vh),8px)] py-[clamp(8px,min(2vw,2vh),24px)] select-none"
      style={{
        backgroundImage: `url(${mainBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Frame Background acts as the main hero container */}
      <div
        className="relative h-full w-full mx-auto overflow-hidden flex flex-col"
        style={{
          backgroundImage: `url(${frameBg})`,
          backgroundSize: '100% 100%', /* Proportional stretching allowed as per requirements */
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Decorative Flower - anchored inside the left frame bottom */}
        <img 
          src={flowerBg} 
          alt="Decorative flower" 
          className="absolute bottom-[5.5%] left-[7%] w-[clamp(60px,9vw,160px)] max-h-[25vh] object-contain object-left-bottom pointer-events-none opacity-90" 
        />

        {/* Frame boundary to prevent scrolling text from overlapping the painted frame design */}
        <div className="flex-1 flex flex-col px-[6%] sm:px-[8%] pt-[3dvh] pb-[2dvh] lg:pb-[3dvh] min-h-0 relative z-10">

          {/* Internal Content Area perfectly clipped to the inside of the frame design */}
          <div className="flex-1 flex flex-col overflow-hidden w-full min-h-0 rounded-xl">
            <div className="flex flex-col h-full flex-1 min-h-0 w-full p-0">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
