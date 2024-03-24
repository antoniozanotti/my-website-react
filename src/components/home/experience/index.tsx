"use client";
import { useState } from "react";
import Section from "@/components/ui/section";
import positions from "@/data/positions";
import Position from "./position";
import { TzButton } from "topaz-react";
import type { VersionType } from "@/const/version";
import versionType from "@/const/version";

export default function Index() {
  const [version, setVersion] = useState<VersionType>(versionType.SHORT);
  return (
    <Section title="Experience">
      <article>
        {positions.map(
          (position, index) =>
            ((version == versionType.SHORT &&
              position.version == versionType.SHORT) ||
              version == versionType.FULL) && (
              <Position
                key={index}
                title={position.title}
                companyName={position.companyName}
                location={position.location}
                period={position.period}
                achievements={position.achievements}
                links={position.links}
                skills={position.skills}
                version={version}
              />
            )
        )}
        {version == versionType.SHORT && (
          <aside className="flex gap-2 mt-[48px]">
            <TzButton
              iconName="ChevronDoubleDownIcon"
              isIconAfterLabel
              variant="accent"
              label="See full employment history"
              onClick={() => setVersion(versionType.FULL)}
            />
          </aside>
        )}
      </article>
    </Section>
  );
}
