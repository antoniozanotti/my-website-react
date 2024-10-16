import { ArticleDetailsInterface } from "./article-details-interface";
import { TzTag } from "topaz-react";

export function ArticleDetails({
  company,
  location,
  period,
  skills,
  ...props
}: ArticleDetailsInterface) {
  const baseStyles = "grid grid-flow-row auto-rows-max";
  props.className = props.className
    ? `${baseStyles} ${props.className}`
    : baseStyles;

  return (
    <div {...props}>
      <span>{company}</span>
      {location && (
        <span className="italic text-c2 lg:text-c3">{location}</span>
      )}
      <span className="font-bold py-4">{period}</span>
      {skills && (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <TzTag key={index} label={skill} variant="secondary" />
          ))}
        </div>
      )}
    </div>
  );
}
