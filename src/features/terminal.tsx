import React from 'react';
import { ReactNode } from 'react';

export interface TerminalProps {
  className?: string;
}

export const Terminal = ({
  className = ''
}: TerminalProps) => {
  return (
    <p className={className}>
      I’m a Frontend Developer<span></span>
    </p>
  );
};