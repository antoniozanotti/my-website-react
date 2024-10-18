"use client";

import { useState } from "react";
import { ArticleList } from "./article-list";
import { ArticleListContainerInterface } from "./article-list-container-interface";

export function ArticleListContainer({
  articles,
  labelForMore,
}: ArticleListContainerInterface) {
  const [isOpen, setIsOpen] = useState(false);
  const qtyItemsShortVersion = articles.filter((article: any) => {
    return article.visibleInShortVersion;
  }).length;
  const showButtonForMore = articles.length > qtyItemsShortVersion && !isOpen;

  function showArticleIfIsOpenOrArticleIsVisibleInShortVersion(
    visibleInShortVersion: boolean
  ) {
    return isOpen || visibleInShortVersion;
  }

  return (
    <ArticleList
      articles={articles}
      showArticle={showArticleIfIsOpenOrArticleIsVisibleInShortVersion}
      labelForMore={labelForMore}
      showButtonForMore={showButtonForMore}
      setIsOpen={setIsOpen}
    />
  );
}
