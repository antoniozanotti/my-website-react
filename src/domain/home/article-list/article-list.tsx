"use client";

import { TzButton } from "topaz-react";
import { ArticleContainer } from "./article/article-container";
import { ArticleListInterface } from "./article-list-interface";
import { NodeTypeEnum } from "@/enums/node-type-enum";
import { ArticleType } from "@/types/article-type";
import { Link } from "@/types/link";

export function ArticleList({
  articles,
  showArticle,
  labelForMore,
  showButtonForMore,
  setIsOpen,
}: ArticleListInterface) {
  function getParagraphs(article: ArticleType): string[] {
    let paragraphs: string[] = [];
    article.achievements.json.content.forEach((p) => {
      if (
        p.content === undefined ||
        p.content[0].value === "" ||
        p.content[0].value === undefined
      ) {
        return;
      }
      paragraphs.push(p.content[0].value);
    });
    return paragraphs;
  }

  function getLinks(article: ArticleType): Link[] {
    let links: Link[] = [];
    article.links?.json.content
      .filter((link) => link.nodeType == NodeTypeEnum["unordered-list"])[0]
      .content?.forEach((link) => {
        if (
          link.content === undefined ||
          link.content[0].content === undefined
        ) {
          return;
        }
        let linkContent = link.content[0].content.filter(
          (l) => l.nodeType == NodeTypeEnum["hyperlink"]
        )[0];
        if (linkContent.content === undefined) {
          return;
        }
        links.push({
          link: linkContent.data.uri ?? "",
          label: linkContent.content[0].value ?? "",
        });
      });
    return links;
  }

  function getSkills(article: ArticleType): string[] | undefined {
    return article.skillsCollection?.items.map((item) => {
      return item.title;
    });
  }

  return (
    <div>
      {articles.map(
        (article, index: number) =>
          showArticle(article.visibleInShortVersion) && (
            <ArticleContainer
              key={index}
              title={article.title}
              company={article.company}
              location={article.location}
              period={article.period}
              paragraphs={getParagraphs(article)}
              links={getLinks(article)}
              skills={getSkills(article)}
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
            onClick={() => setIsOpen(true)}
          />
        </aside>
      )}
    </div>
  );
}
