import { useTranslations } from "next-intl";

export default function Code() {
  const tAbout = useTranslations('About');
  const t = useTranslations('');
  const colorConst = "text-accent-2 dark:text-dark-accent-2";
  const colorIdentifier = "text-accent-1 dark:text-dark-accent-1";
  const colorObject = "text-accent dark:text-dark-accent";
  const colorString = "text-primary-2 dark:text-dark-primary-2";
  return (
    <code>
      <span className={colorConst}>const</span>{" "}
      <span className={colorIdentifier}>{tAbout('varBirthday')}</span> ={" "}
      <span className={colorConst}>new</span>{" "}
      <span className={colorObject}>Date</span>(
      <span className={colorString}>{"\"1990-04-18\""}</span>);
      <br />
      <span className={colorConst}>const</span>{" "}
      <span className={colorIdentifier}>{tAbout('varLocation')}</span> ={" "}
      <span className={colorString}>{"\"Florianópolis, "+t("Brazil")+"\""}</span>;<br />
      <span className={colorConst}>const</span>{" "}
      <span className={colorIdentifier}>{tAbout('varPronouns')}</span> = [
      <span className={colorString}>{"\""+tAbout("pronouns.he")+"\""}</span>,{" "}
      <span className={colorString}>{"\""+tAbout("pronouns.him")+"\""}</span>];
      <br />
      <span className={colorConst}>const</span>{" "}
      <span className={colorIdentifier}>{tAbout('varDegree')}</span> ={" "}
      <span className={colorString}>
        {"\""+tAbout("degree")+"\""}
      </span>
      ;<br />
      <span className={colorConst}>const</span>{" "}
      <span className={colorIdentifier}>{tAbout('varValues')}</span> = [
      <span className={colorString}>{"\""+tAbout("values.ethic")+"\""}</span>,{" "}
      <span className={colorString}>{"\""+tAbout("values.love")+"\""}</span>,{" "}
      <span className={colorString}>{"\""+tAbout("values.freedom")+"\""}</span>];
    </code>
  );
}
