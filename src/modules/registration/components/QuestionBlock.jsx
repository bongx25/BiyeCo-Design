import React from 'react';

export const QuestionBlock = ({ titleHighlight, titleRest, hideDivider = false, children }) => {
  return (
    <div className="w-full h-full flex-1 max-w-4xl text-left flex flex-col items-start mt-0 pl-[clamp(1rem,3vw,4rem)] pr-[clamp(1rem,2vw,3rem)] pb-0">
      <h3 className="flex items-center justify-start gap-2 mb-[clamp(0.1rem,min(0.5vh,0.5vw),0.4rem)] w-full">
        {titleHighlight && (
          <span className="font-cursive text-[clamp(2rem,min(4vw,5vh),3.5rem)] text-[#B58E3A] font-normal">{titleHighlight}</span>
        )}
        <span className="font-serif text-[clamp(1.1rem,min(2vw,3vh),1.6rem)] text-luxury-navy mb-[0.2rem]">{titleRest}</span>
      </h3>


      {children}
    </div>
  );
};
