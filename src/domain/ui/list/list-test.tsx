import { test, expect } from "@playwright/experimental-ct-react";
import { List } from "./list";

test.describe("List", () => {
  test("should render ul", async ({ mount }) => {
    const component = await mount(<List />);
    await expect(component.locator(":scope:is(ul)")).toHaveCount(1);
  });

  test("should accept className", async ({ mount }) => {
    const component = await mount(<List className='test' />);
    await expect(component).toHaveClass(/test$/);
  });

  test("should render children", async ({ mount }) => {
    const component = await mount(<List><li>Test</li></List>);
    await expect(component.locator("li")).toBeVisible();
  });
});
