import { ColsType } from "./types/cols-type";

export interface GridInterface extends React.ComponentProps<"div"> {
  cols?: ColsType;
}