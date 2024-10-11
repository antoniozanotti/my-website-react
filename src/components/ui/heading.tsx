import { TzHeading } from "topaz-react";

export interface HeadingProps {
  level: "h1" | "h2" | "h3" | "h4";
  title: string;
  anchor?: string;
  className?: string;
}

export default function Heading({
  level,
  title,
  anchor = "",
  className = "",
}: HeadingProps) {
  let size: any = "";
  let variant: any = "";
  let headingClasses = className + " drop-shadow";
  switch (level) {
    case "h1":
      size = "large";
      variant = "accent";
      break;
    case "h2":
      size = "large";
      variant = "accent-1";
      headingClasses += " mt-[164px]";
      break;
    case "h3":
      size = "medium";
      variant = "accent-2";
      headingClasses += " mt-[68px]";
      break;
    default:
      size = "small";
      variant = "secondary";
      headingClasses += " mt-[56px]";
      break;
  }
  return (
    <TzHeading
      level={level}
      size={size}
      variant={variant}
      className={headingClasses}
      id={anchor}
    >
      {title}
    </TzHeading>
  );
}
