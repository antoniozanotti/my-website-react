import { ReactNode } from "react";

export interface GridProps {
  className?: string;
  children?: ReactNode;
}

export default function Grid({
  children,
  className = ""
}: GridProps) {
  return (
    <div className={`sm:grid sm:grid-cols-2 sm:gap-x-8 lg:gap-x-16 ${className}`}>
      {children}
    </div>
  );
}
