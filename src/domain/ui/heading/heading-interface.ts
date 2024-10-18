import { LevelEnum } from "./enums/level-enum";

export interface HeadingInterface {
  title: string;
  level?: keyof typeof LevelEnum;
  anchor?: string;
  className?: string;
}