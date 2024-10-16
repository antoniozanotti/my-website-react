"use client";
import { TzButton } from "topaz-react";
import { ArticleContainer } from "./article/article-container";
import { ArticleListInterface } from "./article-list-interface";
import { NodeTypeEnum } from "@/enums/node-type-enum";

export function ArticleList({
  articles,
  showArticle,
  labelForMore,
  showButtonForMore,
  setIsOpen,
}: ArticleListInterface) {

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
              paragraphs={article.achievements.json.content
                .filter((a) => a.content[0].value != "")
                .map((achievement) => {
                  return achievement.content[0].value;
                })}
              links={article.links?.json.content
                .filter(
                  (link) => link.nodeType == NodeTypeEnum["unordered-list"]
                )[0]
                .content.map((link) => {
                  return {
                    link: link.content[0].content.filter(
                      (l) => l.nodeType == NodeTypeEnum["hyperlink"]
                    )[0].data.uri,
                    label: link.content[0].content.filter(
                      (l) => l.nodeType == NodeTypeEnum["hyperlink"]
                    )[0].content[0].value,
                  };
                })}
              skills={article.skillsCollection?.items.map((item) => {
                return item.title;
              })}
            />
          )
        )
      }
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
