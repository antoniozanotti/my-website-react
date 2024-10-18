import { test, expect } from '@playwright/experimental-ct-react';
import { Terminal } from "./terminal";

test.describe("Terminal", () => {
  test("should render section", async ({ mount }) => {
    const component = await mount(<Terminal />);
    await expect(component.locator(":scope:is(p)")).toBeVisible();
  });

  test("should accept className", async ({ mount }) => {
    const component = await mount(<Terminal className='test' />);
    await expect(component).toHaveClass(/test$/);
  });
});
