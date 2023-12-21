import React from 'react';
import { ReactNode } from 'react';

export interface TerminalProps {
  className?: string;
}

export const Terminal = ({
  className = ''
}: TerminalProps) => {
  return (
    <p className={`text-c2 sm:text-c3 lg:text-c20 flex items-center ${className}`}>
      I’m a Frontend Developer<span className='w-1.5 sm:w-2 lg:w-2.5 h-3 sm:h-4 lg:h-5 bg-primary dark:bg-dark-primary inline-block ml-1'></span>
    </p>
  );
};