import { screen, render } from "@/lib/test";
import { ArticleListContainer } from "./article-list-container";
import { ExperienceMocks } from "../experience/experience-mocks";

describe("ArticleListContainer", () => {
  test("should render component", async () => {
    render(
      <ArticleListContainer
        articles={ExperienceMocks.positions}
        labelForMore="LabelForMore"
      />
    );
    const title = screen.getAllByText(ExperienceMocks.positions[0].title)[0];
    expect(title).toBeInTheDocument();
  });
});
