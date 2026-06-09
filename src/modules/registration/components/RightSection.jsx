import React from 'react';
import { cn } from '../../../shared/utils';

export const RightSection = ({ children, className }) => {
  return (
    <div className={cn("w-full h-full flex flex-col flex-1 min-h-0 min-w-0 px-2 lg:pr-4 lg:pl-[clamp(3rem,6vw,6rem)] pb-2 lg:pb-4 pt-[clamp(0.5rem,min(1.5vh,1vw),1.5rem)]", className)}>
      {children}
    </div>
  );
};
