import { Heading } from "@/domain/ui/heading/heading";
import { Grid } from "@/domain/ui/grid/grid";
import { motion } from "framer-motion";
import { ArticleInterface } from "./article-interface";
import { ArticleDetails } from "./article-details/article-details";
import { ArticleLinks } from "./article-links/article-links";
import { ArticleParagraphs } from "./article-paragraphs/article-paragraphs";

export function Article({
  title,
  company,
  location,
  period,
  paragraphs,
  links,
  skills,
  showParagraph,
  showSeeMore,
  setIsOpen,
  ...props
}: ArticleInterface) {

  return (
    <div {...props}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Heading level="h3" title={title} />
        <Grid cols={3} className="mt-4 space-y-4">
          <ArticleDetails
            company={company}
            location={location}
            period={period}
            skills={skills}
          />
          <div className="col-span-2 space-y-4">
            <ArticleParagraphs
              paragraphs={paragraphs}
              showParagraph={showParagraph}
              showSeeMore={showSeeMore}
              setIsOpen={setIsOpen}
            />
            <ArticleLinks links={links} />
          </div>
        </Grid>
      </motion.div>
    </div>
  );
}
