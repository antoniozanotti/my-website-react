import { NodeTypeEnum } from "@/enums/node-type-enum";
import { ArticleType } from "@/types/article-type";
import { Link } from "@/types/link";

export function getParagraphs(article: ArticleType): string[] {
  let paragraphs: string[] = [];
  article.achievements.json.content.forEach((p) => {
    if (
      p.content === undefined ||
      p.content[0].value === "" ||
      p.content[0].value === undefined
    ) {
      return;
    }
    paragraphs.push(p.content[0].value);
  });
  return paragraphs;
}

export function getLinks(article: ArticleType): Link[] {
  let links: Link[] = [];
  article.links?.json.content
    .filter((link) => link.nodeType == NodeTypeEnum["unordered-list"])[0]
    .content?.forEach((link) => {
      if (
        link.content === undefined ||
        link.content[0].content === undefined
      ) {
        return;
      }
      let linkContent = link.content[0].content.filter(
        (l) => l.nodeType == NodeTypeEnum["hyperlink"]
      )[0];
      if (linkContent.content === undefined) {
        return;
      }
      links.push({
        link: linkContent.data.uri ?? "",
        label: linkContent.content[0].value ?? "",
      });
    });
  return links;
}

export function getSkills(article: ArticleType): string[] {
  let skills: string[] = [];
  article.skillsCollection?.items.map((item) => {
    skills.push(item.title);
  });
  return skills;
}