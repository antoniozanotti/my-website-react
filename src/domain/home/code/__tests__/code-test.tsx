import { screen, render } from "@/lib/test";
import { Code } from "../code";

describe("Code", () => {
  it("should render code", async () => {
    render(<Code />);
    expect(screen.getByRole("code")).toBeVisible();
  });
});
