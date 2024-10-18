import { AboutInterface } from "./about-interface";
import { useTranslations } from "next-intl";
import { Section } from "@/domain/ui/section/section";
import { Grid } from "@/domain/ui/grid/grid";
import { Code } from "../code/code";

export function About({ paragraphs }: AboutInterface) {
  const t = useTranslations("About");

  return (
    <Section title={t("title")} anchor="about">
      <Grid>
        <div className="flex flex-col space-y-4 mt-4">
          {paragraphs.map((p: string, index: number) => (
            <p key={index}>{p}</p>
          ))}
        </div>
        <div className="mt-4">
          <Code />
        </div>
      </Grid>
    </Section>
  );
}
