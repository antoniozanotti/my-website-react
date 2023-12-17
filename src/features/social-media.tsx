import React from 'react';
import { ReactNode } from 'react';
import LinkdedinBrandSvg from '@images/linked_in_brand';
import GithubBrandSvg from '@images/github_brand';

export interface SocialMediaProps {
  className?: string;
}

export const SocialMedia = ({
  className = ''
}: SocialMediaProps) => {
  let socialMediaClasses = className + " flex gap-10";
  return (
    <div className={socialMediaClasses}>
      <a
        href="https://www.linkedin.com/in/antoniozanotti/"
        title="Linked In"
        target="_blank"
        className='flex items-center gap-3 hover:underline text-primary dark:text-dark-primary'
      >
        <LinkdedinBrandSvg />
        Linked In
      </a>
      <a
        href="https://github.com/antoniozanotti"
        title="GitHub"
        target="_blank"
        className='flex items-center gap-3 hover:underline text-primary dark:text-dark-primary'
      >
        <GithubBrandSvg />
        GitHub
      </a>
    </div>
  );
};