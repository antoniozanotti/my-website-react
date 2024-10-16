import { Link } from "@/types/link";

export interface ArticleDetailsInterface extends React.ComponentProps<"div"> {
  company: string;
  location?: string;
  period: string;
  skills?: string[];
}
