import { ProjectsInterface } from "./projects-interface";
import { useTranslations } from "next-intl";
import { Section } from "@/domain/ui/section/section";
import { ArticleListContainer } from "../article-list/article-list-container";

export function Projects({ projects }: ProjectsInterface) {
  const t = useTranslations("Projects");

  return (
    <Section title={t("title")}>
      <ArticleListContainer articles={projects} labelForMore={t("labelForMore")} />
    </Section>
  );
}
