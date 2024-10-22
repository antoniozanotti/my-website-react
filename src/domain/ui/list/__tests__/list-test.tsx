import { screen, render, firstComponent } from "@/lib/test";
import { List } from "../list";

describe("List", () => {
  it("should render ul", async () => {
    const { container } = render(<List />);
    const component = screen.getByRole("list");

    expect(component).toBeVisible();
    expect(container).toMatchSnapshot();
  });

  it("should accept className", async () => {
    const { container } = render(<List className='test' />);
    const component = firstComponent(screen);

    expect(component).toHaveClass(/test$/);
    expect(container).toMatchSnapshot();
  });

  it("should render children", async () => {
    const { container } = render(<List><li>Test</li></List>);
    const component = screen.getByRole("listitem");

    expect(component).toBeVisible();
    expect(container).toMatchSnapshot();
  });
});
