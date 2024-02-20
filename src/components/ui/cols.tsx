import { ReactNode } from "react";

export interface ColsProps extends React.ComponentProps<"div"> {
  children?: ReactNode;
}

export default function Cols({ children, ...props }: ColsProps) {
  let divClasses = "flex gap-x-4";
  props.className = props.className
    ? divClasses + " " + props.className
    : divClasses;
  return <div {...props}>{children}</div>;
}
