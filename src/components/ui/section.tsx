import { ReactNode } from "react";
import Heading from "@/components/ui/heading";

export interface SectionProps extends React.ComponentProps<"section"> {
  title: string;
  anchor?: string;
  children?: ReactNode;
}

export default function Section({
  title,
  anchor,
  children,
  ...props
}: SectionProps) {
  return (
    <section {...props}>
      <Heading level="h2" title={title} anchor={anchor} />
      {children}
    </section>
  );
}
