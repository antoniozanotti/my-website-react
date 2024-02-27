export default function Code() {
  const colorConst = "text-accent-2 dark:text-dark-accent-2";
  const colorIdentifier = "text-accent-1 dark:text-dark-accent-1";
  const colorObject = "text-accent dark:text-dark-accent";
  const colorString = "text-primary-2 dark:text-dark-primary-2";
  return (
    <code>
      <span className={colorConst}>const</span>{" "}
      <span className={colorIdentifier}>birthday</span> ={" "}
      <span className={colorConst}>new</span>{" "}
      <span className={colorObject}>Date</span>(
      <span className={colorString}>{"\"1990-04-18\""}</span>);
      <br />
      <span className={colorConst}>const</span>{" "}
      <span className={colorIdentifier}>location</span> ={" "}
      <span className={colorString}>{"\"Florianópolis, Brazil\""}</span>;<br />
      <span className={colorConst}>const</span>{" "}
      <span className={colorIdentifier}>pronouns</span> = [
      <span className={colorString}>{"\"he\""}</span>,{" "}
      <span className={colorString}>{"\"him\""}</span>];
      <br />
      <span className={colorConst}>const</span>{" "}
      <span className={colorIdentifier}>degree</span> ={" "}
      <span className={colorString}>
        {"\"Internet Systems Technologist (FEEVALE, 2011)\""}
      </span>
      ;<br />
      <span className={colorConst}>const</span>{" "}
      <span className={colorIdentifier}>secondDegree</span> ={" "}
      <span className={colorString}>{"\"Bachelor in Sociology\""}</span>;<br />
      <span className={colorConst}>const</span>{" "}
      <span className={colorIdentifier}>values</span> = [
      <span className={colorString}>{"\"ethic\""}</span>,{" "}
      <span className={colorString}>{"\"love\""}</span>,{" "}
      <span className={colorString}>{"\"freedom\""}</span>];
    </code>
  );
}
