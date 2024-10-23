import { screen, render, firstComponent, act } from "@/lib/test";
import { Terminal } from "../terminal";

const seconds = 1000;

describe("Terminal", () => {
  it("should render section", async () => {
    const { container } = render(<Terminal />);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 4 * seconds));
    });
    expect(screen.getByRole("paragraph")).toBeVisible();
    expect(container).toMatchSnapshot();
  });

  it("should accept className", async () => {
    const { container } = render(<Terminal className='test' />);
    const component = firstComponent(screen);

    expect(component).toHaveClass(/test$/);
    expect(container).toMatchSnapshot();
  });
});
