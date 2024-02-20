import { ReactNode } from "react";

export interface GridProps extends React.ComponentProps<"div"> {
  children?: ReactNode;
}

export default function Grid({ children, ...props }: GridProps) {
  let divClasses = "sm:grid sm:grid-cols-2 sm:gap-x-8 lg:gap-x-16";
  props.className = props.className
    ? divClasses + " " + props.className
    : divClasses;
  return <div {...props}>{children}</div>;
}
