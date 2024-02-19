import { ReactNode } from "react";

export interface ColsProps {
  className?: string;
  children?: ReactNode;
}

export default function Cols({
  children,
  className = ""
}: ColsProps) {
  return (
    <div className={`flex gap-x-4 ${className}`}>
      {children}
    </div>
  );
}
