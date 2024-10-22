import { screen, render, firstComponent } from "@/lib/test";
import { Grid } from "../grid";

describe("Grid", () => {
  it("should render div", async () => {
    const { container } = render(<Grid />);
    const component = firstComponent(screen);

    expect(component).toBeVisible();
    expect(container).toMatchSnapshot();
  });

  it("should accept className", async () => {
    const { container } = render(<Grid className='test' />);
    const component = firstComponent(screen);

    expect(component).toHaveClass(/test$/);
    expect(container).toMatchSnapshot();
  });

  it("should render children", async () => {
    const { container } = render(<Grid>Test</Grid>);
    const component = firstComponent(screen);

    expect(component).toHaveTextContent("Test");
    expect(container).toMatchSnapshot();
  });

  it("should render 2 columns", async () => {
    const { container } = render(<Grid cols={2} />);
    const component = firstComponent(screen);

    expect(component).toHaveClass(/grid-cols-2/);
    expect(container).toMatchSnapshot();
  });

  it("should render 3 columns", async () => {
    const { container } = render(<Grid cols={3} />);
    const component = firstComponent(screen);

    expect(component).toHaveClass(/grid-cols-3/);
    expect(container).toMatchSnapshot();
  });
});
