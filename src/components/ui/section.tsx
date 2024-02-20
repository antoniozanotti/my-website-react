import React from "react";
import { ReactNode } from "react";
import Heading from "@/components/ui/heading";

export interface SectionProps extends React.ComponentProps<"section"> {
  title: string;
  children?: ReactNode;
}

export default function Section({
  title,
  children,
  ...props
}: SectionProps) {
  return (
    <section {...props}>
      <Heading level="h2" title={title} />
      {children}
    </section>
  );
}
