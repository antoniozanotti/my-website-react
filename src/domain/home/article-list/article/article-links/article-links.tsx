import { ArticleLinksInterface } from "./article-links-interface";
import { List } from "@/domain/ui/list/list";
import { styles } from "@/consts/styles";

export function ArticleLinks({ links }: ArticleLinksInterface) {
  return (
    links && (
      <List className="pl-4">
        {links.map((link, index) => (
          <li key={index} className="h-12">
            <a
              href={link.link}
              title={link.label}
              target="_blank"
              className={styles.aHover}
            >
              {link.label}
            </a>
          </li>
        ))}
      </List>
    )
  );
}
