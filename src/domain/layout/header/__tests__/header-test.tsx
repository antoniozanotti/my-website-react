import { render } from "@/lib/test";
import { Header } from "../header";

describe("Header", () => {
  it("should render header", async () => {
    const { container } = render(<Header />);
    const header = container.querySelector("header");

    expect(header).toBeVisible();
  });
});
