import { screen, render, firstComponent } from "@/lib/test";
import { Cols } from "./cols";

describe("Cols", () => {
  test("should render div", async () => {
    render(<Cols />);
    const component = firstComponent(screen);

    expect(component).toBeVisible();
  });

  test("should accept className", async () => {
    render(<Cols className='test' />);
    const component = firstComponent(screen);

    expect(component).toHaveClass(/test$/);
  });

  test("should render children", async () => {
    render(<Cols>Test</Cols>);
    const component = firstComponent(screen);
    
    expect(component).toHaveTextContent("Test");
  });
});
