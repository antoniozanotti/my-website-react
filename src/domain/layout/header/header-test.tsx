import { test, expect } from "@playwright/experimental-ct-react";
import { Header } from "./header";

test.describe("Header", () => {
  test("should render header", async ({ mount }) => {
    const component = await mount(<Header />);
    await expect(component.locator(":scope:is(header)")).toBeVisible();
  });
});
