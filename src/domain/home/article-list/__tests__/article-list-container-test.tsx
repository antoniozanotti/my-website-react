import { screen, render } from "@/lib/test";
import { ArticleListContainer } from "../article-list-container";
import { ExperienceMocks } from "../../experience/__tests__/experience-mocks";

describe("ArticleListContainer", () => {
  it("should render component", async () => {
    const { container } = render(
      <ArticleListContainer
        articles={ExperienceMocks.positions}
        labelForMore="LabelForMore"
      />
    );
    const title = screen.getAllByText(ExperienceMocks.positions[0].title)[0];
    expect(title).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
