import { screen, render, firstComponent } from "@/lib/test";
import { Section } from "../section";

describe("Section", () => {
  it("should render section", async () => {
    const { container } = render(<Section title="Test Title" />);
    const component = container.querySelector("section");

    expect(component).toBeVisible();
  });

  it("should accept anchor", async () => {
    render(<Section title="Test Title" anchor="TestId" />);
    const component = await screen.findByRole("heading", { level: 2 });

    expect(component).toHaveAttribute("id", "TestId");
  });

  it("should accept className", async () => {
    render(<Section title="Test Title" className="test" />);
    const component = firstComponent(screen);

    expect(component).toHaveClass(/test$/);
  });

  it("should render children", async () => {
    const { container } = render(
      <Section title="Test Title">
        <span>Children</span>
      </Section>
    );

    expect(container).toHaveTextContent("Children");
  });
});
