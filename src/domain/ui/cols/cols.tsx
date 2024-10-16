export function Cols({
  children,
  ...props
}: React.ComponentProps<"div">) {
  const baseStyles = "flex gap-x-4";
  props.className = props.className
    ? `${baseStyles} ${props.className}`
    : baseStyles;

  return <div {...props}>{children}</div>;
}
