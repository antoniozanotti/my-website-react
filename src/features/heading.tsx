import React from "react";
import { ReactNode } from "react";
import { TzHeading, TzHeadingProps } from "topaz-react";

export interface HeadingProps {
  level: "h1" | "h2" | "h3" | "h4";
  title: string;
}

export const Heading = ({ level, title }: HeadingProps) => {
  let size: any = "large";
  let variant: any = "accent";
  switch (level) {
    case "h2":
      variant = "accent-1";
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
    <TzHeading level={level} size={size} variant={variant} className="drop-shadow-lg">
      {title}
    </TzHeading>
  );
};
