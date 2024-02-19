import { ReactNode } from "react";

export interface ListProps {
  className?: string;
  children?: ReactNode;
}

export default function List({
  children,
  className = ""
}: ListProps) {
  return (
    <ul className={`list-disc list-inside ${className}`}>
      {children}
    </ul>
  );
}
