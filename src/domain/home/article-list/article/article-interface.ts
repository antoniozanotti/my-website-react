import { Link } from "@/types/link";

export interface ArticleInterface extends React.ComponentProps<"div"> {
  title: string;
  company: string;
  location?: string;
  period: string;
  paragraphs: string[];
  links?: Link[];
  skills?: string[];
  showParagraph: (paragraphIndex: number) => boolean;
  showSeeMore: (paragraphIndex: number) => boolean;
  setIsOpen: (isOpen: boolean) => void
}