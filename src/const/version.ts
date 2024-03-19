export const versionType = {
  SHORT: "short",
  FULL: "full"
} as const;

export type VersionType = "short" | "full";

export default versionType;