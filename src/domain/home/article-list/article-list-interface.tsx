import { ArticleType } from "@/types/article-type";

export interface ArticleListInterface {
  articles: ArticleType[];
  showArticle(visibleInShortVersion: boolean): boolean;
  labelForMore: string;
  showButtonForMore: boolean;
  setIsOpen(isOpen: boolean): void;
}