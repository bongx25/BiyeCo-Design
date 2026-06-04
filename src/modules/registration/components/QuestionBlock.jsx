import React from 'react';

export const QuestionBlock = ({ titleHighlight, titleRest, hideDivider = false, children }) => {
  return (
    <div className="w-full max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start mt-[clamp(0.5rem,1.5vh,2rem)]">
      <h3 className="flex items-center justify-center lg:justify-start gap-2 mb-[clamp(0.2rem,1vh,0.5rem)] w-full">
        {titleHighlight && (
          <span className="font-cursive text-[clamp(1.8rem,3vw,2.4rem)] text-[#B58E3A] font-normal">{titleHighlight}</span>
        )}
        <span className="font-serif text-[clamp(0.8rem,1.5vw,1.05rem)] text-luxury-navy mb-[0.35rem]">{titleRest}</span>
      </h3>

      {/* Ornamental Divider */}
      {!hideDivider && (
        <div className="flex items-center justify-center lg:justify-start w-full mb-[clamp(0.5rem,2vh,2rem)] opacity-80">
          <div className="h-[1px] w-[clamp(1rem,3vw,2rem)] bg-gradient-to-r from-transparent to-[#B58E3A]"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#B58E3A] mx-1.5"></div>
          <div className="h-[1px] w-[clamp(1rem,3vw,2rem)] bg-gradient-to-l from-transparent to-[#B58E3A]"></div>
        </div>
      )}

      {children}
    </div>
  );
};
