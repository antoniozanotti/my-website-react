import { TzHeading } from "topaz-react";
import { HeadingInterface } from "./heading-interface";
import { LevelEnum } from "./enums/level-enum";
import type { CustomStylesType } from "./types/custom-styles-type";
import { SizeEnum } from "./enums/size-enum";
import { VariantEnum } from "./enums/variant-enum";

export function Heading({
  title,
  level = "h1",
  anchor = "",
  className = "",
}: HeadingInterface) {
  const baseStyles = `drop-shadow`;
  const { size, variant, marginStyles } = useCustomStyles(level);
  const headingStyles = `${baseStyles} ${marginStyles} ${className}`;
  return (
    <TzHeading
      level={level}
      size={size}
      variant={variant}
      className={headingStyles}
      id={anchor}
    >
      {title}
    </TzHeading>
  );
}

function useCustomStyles(level: keyof typeof LevelEnum): CustomStylesType {
  return {
    h1: {
      size: SizeEnum.large,
      variant: VariantEnum["accent"],
      marginStyles: "",
    },
    h2: {
      size: SizeEnum.large,
      variant: VariantEnum["accent-1"],
      marginStyles: "mt-[164px]",
    },
    h3: {
      size: SizeEnum.medium,
      variant: VariantEnum["accent-2"],
      marginStyles: "mt-[68px]",
    },
    h4: {
      size: SizeEnum.small,
      variant: VariantEnum["secondary"],
      marginStyles: "mt-[56px]",
    },
  }[level];
}
