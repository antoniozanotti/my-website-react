export interface ArticleParagraphsInterface {
  paragraphs: string[];
  showParagraph: (paragraphIndex: number) => boolean;
  showSeeMore: (paragraphIndex: number) => boolean;
  setIsOpen: (isOpen: boolean) => void;
}
