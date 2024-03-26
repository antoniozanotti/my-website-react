import Section from "@/components/ui/section";
import WorksList from "@/components/common/work-list";

export default function Index({ positions }: { positions: any }) {
  return (
    <Section title="Experience">
      <WorksList
        works={positions}
        labelForMore={"See full employment history"}
      />
    </Section>
  );
}
