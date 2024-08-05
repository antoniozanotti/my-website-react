import Section from "@/components/ui/section";
import WorksList from "@/components/common/work-list";
import { useTranslations } from "next-intl";

export default function Index({ positions }: { positions: any }) {
  const t = useTranslations('Experience');
  return (
    <Section title={t('title')}>
      <WorksList
        works={positions}
        labelForMore={t("labelForMore")}
      />
    </Section>
  );
}
