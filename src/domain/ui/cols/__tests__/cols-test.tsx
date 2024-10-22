import { screen, render, firstComponent } from "@/lib/test";
import { Cols } from "../cols";

describe("Cols", () => {
  it("should render div", async () => {
    render(<Cols />);
    const component = firstComponent(screen);

    expect(component).toBeVisible();
  });

  it("should accept className", async () => {
    render(<Cols className='test' />);
    const component = firstComponent(screen);

    expect(component).toHaveClass(/test$/);
  });

  it("should render children", async () => {
    render(<Cols>Test</Cols>);
    const component = firstComponent(screen);
    
    expect(component).toHaveTextContent("Test");
  });
});
