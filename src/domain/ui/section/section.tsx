import { Heading } from "../heading/heading";
import { SectionInterface } from "./section-interface";

export function Section({
  title,
  anchor,
  children,
  ...props
}: SectionInterface) {
  return (
    <section {...props}>
      <Heading level="h2" title={title} anchor={anchor} />
      {children}
    </section>
  );
}
