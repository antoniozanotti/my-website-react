import { screen, render, firstComponent } from "@/lib/test";
import { Grid } from "../grid";

describe("Grid", () => {
  it("should render div", async () => {
    render(<Grid />);
    const component = firstComponent(screen);

    expect(component).toBeVisible();
  });

  it("should accept className", async () => {
    render(<Grid className='test' />);
    const component = firstComponent(screen);

    expect(component).toHaveClass(/test$/);
  });

  it("should render children", async () => {
    render(<Grid>Test</Grid>);
    const component = firstComponent(screen);

    expect(component).toHaveTextContent("Test");
  });

  it("should render 2 columns", async () => {
    render(<Grid cols={2} />);
    const component = firstComponent(screen);

    expect(component).toHaveClass(/grid-cols-2/);
  });

  it("should render 3 columns", async () => {
    render(<Grid cols={3} />);
    const component = firstComponent(screen);

    expect(component).toHaveClass(/grid-cols-3/);
  });
});
