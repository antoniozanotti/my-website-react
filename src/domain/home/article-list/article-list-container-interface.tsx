import { ArticleType } from "@/types/article-type";

export interface ArticleListContainerInterface {
  articles: ArticleType[];
  labelForMore: string;
}