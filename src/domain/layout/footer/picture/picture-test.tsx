import { screen, render } from "@/lib/test";
import { Picture } from "./picture";

describe("Picture", () => {
  test("should render picture", async () => {
    const { container } = render(<Picture />);
    const picture = container.querySelector("picture");

    expect(picture).toBeVisible();
  });
});
