import { ReactNode } from "react";

export interface GridProps extends React.ComponentProps<"div"> {
  cols?: number;
  children?: ReactNode;
}

export default function Grid({ cols = 2, children, ...props }: GridProps) {
  let divClasses = "sm:grid sm:gap-x-8 lg:gap-x-16";
  if (cols == 3) {
    divClasses += " sm:grid-cols-3";
  } else {
    divClasses += " sm:grid-cols-2";
  }
  props.className = props.className
    ? divClasses + " " + props.className
    : divClasses;
  return <div {...props}>{children}</div>;
}
