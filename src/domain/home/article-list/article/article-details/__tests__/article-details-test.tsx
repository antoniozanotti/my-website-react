import { screen, render, firstComponent } from "@/lib/test";
import { ArticleDetails } from "../article-details";

describe("ArticleDetails", () => {
  it("should render default props", async () => {
    const { container } = render(
      <ArticleDetails company="Company" period="Period" />
    );
    const component = firstComponent(screen);
    expect(component).toBeVisible();
    expect(component).toHaveTextContent("Company");
    expect(component).toHaveTextContent("Period");
    expect(container).toMatchSnapshot();
  });

  it("should accept location", async () => {
    const { container } = render(
      <ArticleDetails
        company="Company"
        period="Period"
        className="test"
        location="Location"
      />
    );
    const component = firstComponent(screen);
    expect(component).toHaveTextContent("Location");
    expect(container).toMatchSnapshot();
  });

  it("should accept skills", async () => {
    const { container } = render(
      <ArticleDetails
        company="Company"
        period="Period"
        className="test"
        skills={["Skill1", "Skill2"]}
      />
    );
    const component = firstComponent(screen);
    expect(component).toHaveTextContent("Skill1");
    expect(component).toHaveTextContent("Skill2");
    expect(container).toMatchSnapshot();
  });

  it("should accept className", async () => {
    const { container } = render(<ArticleDetails company="Company" period="Period" className="test" />);
    const component = firstComponent(screen);
    expect(component).toHaveClass(/test$/);
    expect(container).toMatchSnapshot();
  });
});
