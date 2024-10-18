"use client";

import { useState } from "react";
import { ArticleContainerInterface } from "./article-container-interface";
import { Article } from "./article";

export function ArticleContainer({
  title,
  company,
  location,
  period,
  paragraphs,
  links,
  skills,
  ...props
}: ArticleContainerInterface) {
  company = company ?? "";
  const limit = 3;
  const [isOpen, setIsOpen] = useState(false);

  function showParagraphIfIsOpenOrParagraphIndexLessLimit(
    paragraphindex: number
  ) {
    return isOpen || paragraphindex < limit;
  }

  function showSeeMoreIfNotOpenAndParagraphIsLastVisible(
    paragraphindex: number
  ) {
    return !isOpen && paragraphindex == limit - 1 && paragraphs.length > limit;
  }

  return (
    <Article
      title={title}
      company={company}
      location={location}
      period={period}
      paragraphs={paragraphs}
      links={links}
      skills={skills}
      showParagraph={showParagraphIfIsOpenOrParagraphIndexLessLimit}
      showSeeMore={showSeeMoreIfNotOpenAndParagraphIsLastVisible}
      setIsOpen={setIsOpen}
      {...props}
    />
  );
}
