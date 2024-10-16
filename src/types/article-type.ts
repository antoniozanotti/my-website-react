import { NodeType } from "@/types/node-type"

export type ArticleType = {
  title: string,
  company: string,
  location?: string,
  period: string,
  visibleInShortVersion: boolean,
  achievements: {
    json: NodeType
  },
  links?: {
    json: NodeType
  },
  skillsCollection?: {
    items: {
      title: string
    }[]
  },
}
