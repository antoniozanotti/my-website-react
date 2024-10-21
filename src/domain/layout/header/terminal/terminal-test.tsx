import { screen, render, firstComponent } from "@/lib/test";
import { Terminal } from "./terminal";

describe("Terminal", () => {
  test("should render section", async () => {
    render(<Terminal />);
    expect(screen.getByRole("paragraph")).toBeVisible();
  });

  test("should accept className", async () => {
    render(<Terminal className='test' />);

    const component = firstComponent(screen);

    expect(component).toHaveClass(/test$/);
  });
});
