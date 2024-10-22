import { screen, render } from "@/lib/test";
import { Code } from "../code";

describe("Code", () => {
  it("should render code", async () => {
    const { container } = render(<Code />);
    expect(screen.getByRole("code")).toBeVisible();
    expect(container).toMatchSnapshot();
  });
});
