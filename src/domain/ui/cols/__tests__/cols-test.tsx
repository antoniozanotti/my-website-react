import { screen, render, firstComponent } from "@/lib/test";
import { Cols } from "../cols";

describe("Cols", () => {
  it("should render div", async () => {
    const { container } = render(<Cols />);
    const component = firstComponent(screen);

    expect(component).toBeVisible();
    expect(container).toMatchSnapshot();
  });

  it("should accept className", async () => {
    const { container } = render(<Cols className='test' />);
    const component = firstComponent(screen);

    expect(component).toHaveClass(/test$/);
    expect(container).toMatchSnapshot();
  });

  it("should render children", async () => {
    const { container } = render(<Cols>Test</Cols>);
    const component = firstComponent(screen);
    
    expect(component).toHaveTextContent("Test");
    expect(container).toMatchSnapshot();
  });
});
