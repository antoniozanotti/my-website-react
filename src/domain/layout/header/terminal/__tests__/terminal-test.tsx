import { screen, render, firstComponent } from "@/lib/test";
import { Terminal } from "../terminal";

describe("Terminal", () => {
  it("should render section", async () => {
    const { container } = render(<Terminal />);
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
