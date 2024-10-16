import { GridInterface } from "./grid-interface";

export function Grid({
  cols = 2,
  children,
  ...props
}: GridInterface) {
  const baseStyles = "sm:grid sm:gap-x-8 lg:gap-x-16";
  const colsStyles = cols == 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
  const divStyles = `${baseStyles} ${colsStyles}`;
  props.className = props.className
    ? `${divStyles} ${props.className}`
    : divStyles;

  return <div {...props}>{children}</div>;
}
