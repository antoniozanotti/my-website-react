import React from "react";
import { ReactNode } from "react";
import { TzHeading, TzHeadingProps } from "topaz-react";

export interface HeadingProps {
  level: "h1" | "h2" | "h3" | "h4";
  title: string;
  className?: string;
}

export const Heading = ({ level, title, className = '' }: HeadingProps) => {
  let size: any = "large";
  let variant: any = "accent";
  let headingClasses = className + " drop-shadow";
  switch (level) {
    case "h2":
      variant = "accent-1";
      //headingClasses += " pt-40 pb-20"
      break;
    case "h3":
      size = "medium";
      variant = "accent-2";
      break;
    case "h4":
      size = "small";
      variant = "primary-2";
      break;
  }
  return (
    <TzHeading level={level} size={size} variant={variant} className={headingClasses}>
      {title}
    </TzHeading>
  );
};
