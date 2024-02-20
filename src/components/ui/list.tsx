import { ReactNode } from "react";

export interface ListProps extends React.ComponentProps<"ul"> {
  children?: ReactNode;
}

export default function List({ children, ...props }: ListProps) {
  let ulClasses = "list-disc list-inside";
  props.className = props.className
    ? ulClasses + " " + props.className
    : ulClasses;
  return <ul {...props}>{children}</ul>;
}
