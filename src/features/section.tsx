import React from "react";
import { ReactNode } from "react";
import Heading from "@features/heading";

export interface SectionProps {
  title: string;
  className?: string;
  children?: ReactNode;
}

export default function Section({
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={className}>
      <Heading level="h2" title={title} />
      {children}
    </section>
  );
}
