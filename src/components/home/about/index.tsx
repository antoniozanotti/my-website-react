import Section from "@/components/ui/section";
import Grid from "@/components/ui/grid";
import Code from "./code";
import { useTranslations } from "next-intl";

export default function Index({ text }: { text: any }) {
  const t = useTranslations("About");
  return (
    <Section title={t("title")} anchor="about">
      <Grid>
        <div className="flex flex-col space-y-4 mt-4">
          {text.json.content
            .filter((p: any) => p.content[0].value != "")
            .map((p: any, index: number) => (
              <p key={index}>{p.content[0].value}</p>
            ))}
        </div>
        <div className="mt-4">
          <Code />
        </div>
      </Grid>
    </Section>
  );
}
