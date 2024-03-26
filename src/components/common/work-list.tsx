"use client";
import { useState } from "react";
import Work from "./work";
import { TzButton } from "topaz-react";
import type { VersionType } from "@/const/version";
import versionType from "@/const/version";

export default function WorksList({
  works,
  labelForMore,
}: {
  works: any;
  labelForMore: string;
}) {
  const [version, setVersion] = useState<VersionType>(versionType.SHORT);
  const qtyItemsShortVersion = works.filter((work: any) => {
    return work.visibleInShortVersion;
  }).length;
  const showButtonForMore =
    works.length > qtyItemsShortVersion && version == versionType.SHORT;
  return (
    <article>
      {works.map(
        (work: any, index: number) =>
          ((version == versionType.SHORT && work.visibleInShortVersion) ||
            version == versionType.FULL) && (
            <Work
              key={index}
              title={work.title}
              company={work.company}
              location={work.location}
              period={work.period}
              achievements={work.achievements.json.content
                .filter((a: any) => a.content[0].value != "")
                .map((achievement: any) => {
                  return achievement.content[0].value;
                })}
              links={work.links?.json.content
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
              skills={work.skillsCollection.items.map((item: any) => {
                return item.title;
              })}
            />
          )
      )}
      {showButtonForMore && (
        <aside className="flex gap-2 mt-[48px]">
          <TzButton
            iconName="ChevronDoubleDownIcon"
            isIconAfterLabel
            variant="accent"
            label={labelForMore}
            onClick={() => setVersion(versionType.FULL)}
          />
        </aside>
      )}
    </article>
  );
}
