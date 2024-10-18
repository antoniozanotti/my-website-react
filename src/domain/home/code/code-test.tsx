import { test, expect } from '@playwright/experimental-ct-react';
import { Code } from "./code";

test.describe("Code", () => {
  test("should render code", async ({ mount }) => {
    const component = await mount(<Code />);
    await expect(component.locator(":scope:is(code)")).toBeVisible();
  });
});
