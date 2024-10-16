import { LevelEnum } from "./enums/level-enum";

export interface HeadingInterface {
  level: keyof typeof LevelEnum;
  title: string;
  anchor?: string;
  className?: string;
}