import React from "react";
import LinkdedinBrandSvg from "@images/linked_in_brand";
import GithubBrandSvg from "@images/github_brand";

export interface SocialMediaProps {
  className?: string;
}

export default function SocialMedia({ className = "" }: SocialMediaProps) {
  let socialMediaClasses = className + " flex place-items-center gap-[30px]";
  let aClasses = "hover:underline flex place-items-center gap-[15px]";
  return (
    <div className={socialMediaClasses}>
      <a
        href="https://www.linkedin.com/in/antoniozanotti/"
        title="Linked In"
        target="_blank"
        className={aClasses}
      >
        <LinkdedinBrandSvg />
        Linked In
      </a>
      <a
        href="https://github.com/antoniozanotti"
        title="GitHub"
        target="_blank"
        className={aClasses}
      >
        <GithubBrandSvg />
        GitHub
      </a>
    </div>
  );
}
