import { render } from "@/lib/test";
import { Footer } from "../footer";

describe("Footer", () => {
  it("should render footer", async () => {
    const {container} = render(<Footer />);
    const footer = container.querySelector("footer");

    expect(footer).toBeVisible();
  });
});
