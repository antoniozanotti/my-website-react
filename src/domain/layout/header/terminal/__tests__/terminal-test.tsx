import { screen, render, firstComponent } from "@/lib/test";
import { Terminal } from "../terminal";

describe("Terminal", () => {
  it("should render section", async () => {
    render(<Terminal />);
    expect(screen.getByRole("paragraph")).toBeVisible();
  });

  it("should accept className", async () => {
    render(<Terminal className='test' />);

    const component = firstComponent(screen);

    expect(component).toHaveClass(/test$/);
  });
});
