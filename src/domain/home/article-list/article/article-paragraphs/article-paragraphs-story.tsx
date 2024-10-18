import { ArticleParagraphs } from "./article-paragraphs";
import { ArticleParagraphsStoryInterface } from "./article-paragraphs-story-interface";

export function ArticleParagraphsStory(props: ArticleParagraphsStoryInterface) {
  return (
    <ArticleParagraphs
      paragraphs={props.paragraphs}
      showParagraph={() => true}
      showSeeMore={() => true}
      setIsOpen={(isOpenParam) => props.setIsOpen(isOpenParam)}
    />
  );
}
