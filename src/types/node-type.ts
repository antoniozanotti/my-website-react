export type NodeType = {
  nodeType: string,
  content: NodeType[],
  value: string,
  data: {
    uri: string
  }
}