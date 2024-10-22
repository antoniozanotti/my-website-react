import { screen, render, firstComponent } from "@/lib/test";
import { Section } from "../section";

describe("Section", () => {
  it("should render section", async () => {
    const { container } = render(<Section title="Test Title" />);
    const component = container.querySelector("section");

    expect(component).toBeVisible();
    expect(container).toMatchSnapshot();
  });

  it("should accept anchor", async () => {
    const { container } = render(<Section title="Test Title" anchor="TestId" />);
    const component = await screen.findByRole("heading", { level: 2 });

    expect(component).toHaveAttribute("id", "TestId");
    expect(container).toMatchSnapshot();
  });

  it("should accept className", async () => {
    const { container } = render(<Section title="Test Title" className="test" />);
    const component = firstComponent(screen);

    expect(component).toHaveClass(/test$/);
    expect(container).toMatchSnapshot();
  });

  it("should render children", async () => {
    const { container } = render(
      <Section title="Test Title">
        <span>Children</span>
      </Section>
    );

    expect(container).toHaveTextContent("Children");
    expect(container).toMatchSnapshot();
  });
});
