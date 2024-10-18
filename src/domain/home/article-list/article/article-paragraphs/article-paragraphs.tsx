import { ArticleParagraphsInterface } from "./article-paragraphs-interface";
import { useTranslations } from "next-intl";
import { styles } from "@/consts/styles";
import { motion } from "framer-motion";

export function ArticleParagraphs({
  paragraphs,
  showParagraph,
  showSeeMore,
  setIsOpen,
}: ArticleParagraphsInterface) {
  const t = useTranslations("Article");

  return (
    <div className="space-y-4">
      {paragraphs.map(
        (paragraph, index) =>
          showParagraph(index) && (
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {paragraph}{" "}
              {showSeeMore(index) && (
                <span className={styles.aHover} onClick={() => setIsOpen(true)}>
                  {t("labelForMore")}
                </span>
              )}
            </motion.p>
          )
      )}
    </div>
  );
}
