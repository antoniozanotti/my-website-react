"use client";

import { TzButton } from "topaz-react";
import { ArticleContainer } from "./article/article-container";
import { ArticleListInterface } from "./article-list-interface";
import { getLinks, getParagraphs, getSkills } from "./article-helper";

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
              paragraphs={getParagraphs(article)}
              links={getLinks(article)}
              skills={getSkills(article)}
            />
          )
      )}
      {showButtonForMore && (
        <div className="flex gap-2 mt-[48px]">
          <TzButton
            iconName="ChevronDoubleDownIcon"
            isIconAfterLabel
            variant="accent"
            label={labelForMore}
            onClick={() => setIsOpen(true)}
          />
        </div>
      )}
    </div>
  );
}