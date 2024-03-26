import Section from "@/components/ui/section";
import WorksList from "@/components/common/work-list";

export default function Index({ projects }: { projects: any }) {
  
  return (
    <Section title="Projects">
      <WorksList
        works={projects}
        labelForMore={"See full projects list"}
      />
    </Section>
  );
}
