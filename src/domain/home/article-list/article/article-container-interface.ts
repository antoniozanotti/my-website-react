import { Link } from "@/types/link";

export interface ArticleContainerInterface extends React.ComponentProps<"div"> {
  title: string;
  company: string;
  location?: string;
  period: string;
  paragraphs: string[];
  links?: Link[];
  skills?: string[];
}