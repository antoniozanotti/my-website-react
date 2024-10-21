import { screen, render, firstComponent } from "@/lib/test";
import { ArticleDetails } from "./article-details";

describe("ArticleDetails", () => {
  test("should render default props", async () => {
    render(
      <ArticleDetails company="Company" period="Period" />
    );
    const component = firstComponent(screen);
    expect(component).toBeVisible();
    expect(component).toHaveTextContent("Company");
    expect(component).toHaveTextContent("Period");
  });

  test("should accept location", async () => {
    render(
      <ArticleDetails
        company="Company"
        period="Period"
        className="test"
        location="Location"
      />
    );
    const component = firstComponent(screen);
    expect(component).toHaveTextContent("Location");
  });

  test("should accept skills", async () => {
    render(
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
  });

  test("should accept className", async () => {
    render(<ArticleDetails company="Company" period="Period" className="test" />);
    const component = firstComponent(screen);
    expect(component).toHaveClass(/test$/);
  });
});
