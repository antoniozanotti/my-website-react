import { screen, render, firstComponent } from "@/lib/test";
import { Grid } from "./grid";

describe("Grid", () => {
  test("should render div", async () => {
    render(<Grid />);
    const component = firstComponent(screen);

    expect(component).toBeVisible();
  });

  test("should accept className", async () => {
    render(<Grid className='test' />);
    const component = firstComponent(screen);

    expect(component).toHaveClass(/test$/);
  });

  test("should render children", async () => {
    render(<Grid>Test</Grid>);
    const component = firstComponent(screen);

    expect(component).toHaveTextContent("Test");
  });

  test("should render 2 columns", async () => {
    render(<Grid cols={2} />);
    const component = firstComponent(screen);

    expect(component).toHaveClass(/grid-cols-2/);
  });

  test("should render 3 columns", async () => {
    render(<Grid cols={3} />);
    const component = firstComponent(screen);

    expect(component).toHaveClass(/grid-cols-3/);
  });
});
