"use client";
import { useState } from "react";
import Position from "./position";
import { TzButton } from "topaz-react";
import type { VersionType } from "@/const/version";
import versionType from "@/const/version";

export default function PositionsList({ positions }: { positions: any }) {
  const [version, setVersion] = useState<VersionType>(versionType.SHORT);
  positions.map((position: any, index: number) => {
    if (index == 7) {
      console.log(position.achievements.json.content);
    }
  });
  return (
    <article>
      {positions.map(
        (position: any, index: number) =>
          ((version == versionType.SHORT && position.visibleInShortVersion) ||
            version == versionType.FULL) && (
            <Position
              key={index}
              title={position.title}
              companyName={position.company}
              location={position.location}
              period={position.period}
              achievements={position.achievements.json.content
                .filter((a: any) => a.content[0].value != "")
                .map((achievement: any) => {
                  return achievement.content[0].value;
                })}
              links={position.links?.json.content
                .filter((link: any) => link.nodeType == "unordered-list")[0]
                .content.map((link: any) => {
                  return {
                    link: link.content[0].content.filter(
                      (l: any) => l.nodeType == "hyperlink"
                    )[0].data.uri,
                    label: link.content[0].content.filter(
                      (l: any) => l.nodeType == "hyperlink"
                    )[0].content[0].value,
                  };
                })}
              skills={position.skillsCollection.items.map(
                (item: any) => {
                  return item.title;
                }
              )}
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
  );
}
