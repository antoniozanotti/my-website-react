import { test, expect } from '@playwright/experimental-ct-react';
import { Grid } from "./grid";

test.describe("Grid", () => {
  test("should render div", async ({ mount }) => {
    const component = await mount(<Grid />);
    await expect(component.locator(":scope:is(div)")).toHaveCount(1);
  });

  test("should accept className", async ({ mount }) => {
    const component = await mount(<Grid className='test' />);
    await expect(component).toHaveClass(/test$/);
  });

  test("should render children", async ({ mount }) => {
    const component = await mount(<Grid>Test</Grid>);
    await expect(component).toContainText("Test");
  });

  test("should render 2 columns", async ({ mount }) => {
    const component = await mount(<Grid cols={2} />);
    await expect(component).toHaveClass(/grid-cols-2/);
  });

  test("should render 3 columns", async ({ mount }) => {
    const component = await mount(<Grid cols={3} />);
    await expect(component).toHaveClass(/grid-cols-3/);
  });
});
