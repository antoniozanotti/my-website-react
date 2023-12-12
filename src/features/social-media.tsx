import React from 'react';
import { ReactNode } from 'react';

export interface SocialMediaProps {
  
}

export const SocialMedia = ({
  
}: SocialMediaProps) => {
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/antoniozanotti/"
        title="Linked In"
        target="_blank"
      >
        Linked In
      </a>
      <a
        href="https://github.com/antoniozanotti"
        title="GitHub"
        target="_blank"
      >
        GitHub
      </a>
    </div>
  );
};