export function List({
  children,
  ...props
}: React.ComponentProps<"ul">) {
  const baseStyles = "list-disc list-inside";
  props.className = props.className
    ? `${baseStyles} ${props.className}`
    : baseStyles;

  return <ul {...props}>{children}</ul>;
}
