import { getLinks, getParagraphs, getSkills } from "../article-helper";
import { ExperienceMocks } from "../../experience/__tests__/experience-mocks";

describe("ArticleHelper", () => {
  it("should return paragraphs", async () => {
    const paragraphs = getParagraphs(ExperienceMocks.positions[0]);

    expect(paragraphs).toMatchSnapshot();
  });

  it("should return links", async () => {
    const links = getLinks(ExperienceMocks.positions[0]);

    expect(links).toMatchSnapshot();
  });

  it("should return skills", async () => {
    const skills = getSkills(ExperienceMocks.positions[0]);

    expect(skills).toMatchSnapshot();
  });
});
