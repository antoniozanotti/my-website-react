import {useTranslations} from 'next-intl';
import Section from "@/components/ui/section";
import WorksList from "@/components/common/work-list";

export default function Index({ projects }: { projects: any }) {
  const t = useTranslations('Projects');
  return (
    <Section title={t('title')}>
      <WorksList
        works={projects}
        labelForMore={t('labelForMore')}
      />
    </Section>
  );
}
