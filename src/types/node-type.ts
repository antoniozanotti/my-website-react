export type NodeType = {
  nodeType: string,
  content?: NodeType[],
  value?: string,
  marks?: string[],
  data: {
    uri?: string
  }
}