import { test, expect } from '@playwright/experimental-ct-react';
import { Cols } from "./cols";

test.describe("Cols", () => {
  test("should render div", async ({ mount }) => {
    const component = await mount(<Cols />);
    await expect(component.locator(":scope:is(div)")).toHaveCount(1);
  });

  test("should accept className", async ({ mount }) => {
    const component = await mount(<Cols className='test' />);
    await expect(component).toHaveClass(/test$/);
  });

  test("should render children", async ({ mount }) => {
    const component = await mount(<Cols>Test</Cols>);
    await expect(component).toContainText("Test");
  });
});
