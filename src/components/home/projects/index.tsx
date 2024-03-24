"use client";
import { useState } from "react";
import Section from "@/components/ui/section";
import projects from "@/data/projects";
import Project from "./project";
import { TzButton } from "topaz-react";
import type { VersionType } from "@/const/version";
import versionType from "@/const/version";

export default function Index() {
  const [version, setVersion] = useState<VersionType>(versionType.SHORT);

  return (
    <Section title="Projects">
      <article>
        {projects.map(
          (project, index) =>
            ((version == versionType.SHORT &&
              project.version == versionType.SHORT) ||
              version == versionType.FULL) && (
              <Project
                key={index}
                title={project.title}
                companyName={project.companyName}
                period={project.period}
                achievements={project.achievements}
                links={project.links}
                skills={project.skills}
                version={version}
              />
            )
        )}
        {version == versionType.SHORT && (
          <aside className="flex gap-2 mt-[48px] hidden">
            <TzButton
              iconName="ChevronDoubleDownIcon"
              isIconAfterLabel
              variant="accent"
              label="See full projects list"
              onClick={() => setVersion(versionType.FULL)}
            />
          </aside>
        )}
      </article>
    </Section>
  );
}
