import { NodeType } from "@/types/node-type";

export type ArticleType = {
  __typename?: string;
  title: string;
  company: string | null;
  location?: string;
  period: string;
  visibleInShortVersion: boolean;
  achievements: {
    __typename?: string;
    json: {
      nodeType: string;
      content: NodeType[];
      data?: {}
    };
  };
  links?: {
    __typename?: string;
    json: {
      nodeType: string;
      content: NodeType[];
      data?: {}
    };
  };
  skillsCollection?: {
    __typename?: string;
    items: {
      __typename?: string;
      title: string;
    }[];
  };
};
