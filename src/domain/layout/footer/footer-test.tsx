import { test, expect } from '@playwright/experimental-ct-react';
import { Footer } from "./footer";

test.describe("Footer", () => {
  test("should render footer", async ({ mount }) => {
    const component = await mount(<Footer />);
    await expect(component.locator(":scope:is(footer)")).toBeVisible();
  });
});
