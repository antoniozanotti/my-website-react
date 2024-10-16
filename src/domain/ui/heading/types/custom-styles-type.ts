import { SizeEnum } from "../enums/size-enum";
import { VariantEnum } from "../enums/variant-enum";

export type CustomStylesType = {
  size: keyof typeof SizeEnum;
  variant: keyof typeof VariantEnum;
  marginStyles: string;
}