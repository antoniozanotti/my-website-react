import React from "react";
import { ReactNode } from "react";
import { Heading } from "@features/heading";

export interface SectionProps {
  title: string;
  children?: ReactNode;
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <section>
      <Heading level="h2" title={title} />
      {children}
    </section>
  );
};
