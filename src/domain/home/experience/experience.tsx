import { ArticleType } from "@/types/article-type";
import { useTranslations } from "next-intl";
import { Section } from "@/domain/ui/section/section";
import { ArticleListContainer } from "../article-list/article-list-container";

export function Experience({ positions }: { positions: ArticleType[] }) {
  const t = useTranslations('Experience');
  
  return (
    <Section title={t('title')}>
      <ArticleListContainer
        articles={positions}
        labelForMore={t("labelForMore")}
      />
    </Section>
  );
}
