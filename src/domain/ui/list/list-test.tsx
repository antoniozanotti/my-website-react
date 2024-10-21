import { screen, render, firstComponent } from "@/lib/test";
import { List } from "./list";

describe("List", () => {
  test("should render ul", async () => {
    render(<List />);
    const component = screen.getByRole("list");

    expect(component).toBeVisible();
  });

  test("should accept className", async () => {
    render(<List className='test' />);
    const component = firstComponent(screen);

    expect(component).toHaveClass(/test$/);
  });

  test("should render children", async () => {
    render(<List><li>Test</li></List>);
    const component = screen.getByRole("listitem");

    expect(component).toBeVisible();
  });
});
