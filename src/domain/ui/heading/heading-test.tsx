import { screen, render, firstComponent } from "@/lib/test";
import { Heading } from "./heading";

describe("Heading", () => {
  test("should render default props", async () => {
    render(<Heading title="Test" />);
    const component = firstComponent(screen);

    expect(component).toHaveTextContent("Test");
  });

  test("should render h1", async () => {
    render(<Heading title="Test" level="h1" />);
    const component = screen.getByRole("heading", {level: 1});

    expect(component).toHaveTextContent("Test");
  });

  test("should render h2", async () => {
    render(<Heading title="Test" level="h2" />);
    const component = screen.getByRole("heading", {level: 2});

    expect(component).toHaveTextContent("Test");
  });

  test("should render h3", async () => {
    render(<Heading title="Test" level="h3" />);
    const component = screen.getByRole("heading", {level: 3});

    expect(component).toHaveTextContent("Test");
  });

  test("should render h4", async () => {
    render(<Heading title="Test" level="h4" />);
    const component = screen.getByRole("heading", {level: 4});

    expect(component).toHaveTextContent("Test");
  });

  test("should accept anchor", async () => {
    render(<Heading title="Test" anchor="testid" />);
    const component = firstComponent(screen);

    expect(component).toHaveAttribute("id", "testid");
  });

  test("should accept className", async () => {
    render(<Heading title="Test" className="test" />);
    const component = firstComponent(screen);

    expect(component).toHaveClass(/test$/);
  });
});
