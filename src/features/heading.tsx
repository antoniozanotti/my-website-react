import React from "react";
import { TzHeading, TzHeadingProps } from "topaz-react";

export interface HeadingProps {
  level: "h1" | "h2" | "h3" | "h4";
  title: string;
  className?: string;
}

export const Heading = ({ level, title, className = '' }: HeadingProps) => {
  let size:any = ""
  let variant: any = "";
  let headingClasses = className + " drop-shadow";
  switch (level) {
    case "h1":
      size = "x_large";
      variant = "accent";
      break;
    case "h2":
      variant = "accent-1";
      break;
    case "h3":
      size = "medium";
      variant = "accent-2";
      break;
    default:
      size = "small";
      variant = "secondary";
      break;
  }
  return (
    <TzHeading level={level} size={size} variant={variant} className={headingClasses}>
      {title}
    </TzHeading>
  );
};
