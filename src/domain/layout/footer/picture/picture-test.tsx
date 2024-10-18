import { test, expect } from '@playwright/experimental-ct-react';
import { Picture } from "./picture";

test.describe("Picture", () => {
  test("should render picture", async ({ mount }) => {
    const component = await mount(<Picture />);
    await expect(component.locator(":scope:is(picture)")).toBeVisible();
  });
});
