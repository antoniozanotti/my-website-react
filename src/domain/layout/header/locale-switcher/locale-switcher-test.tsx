import { test, expect } from "@playwright/experimental-ct-react";
import { LocaleSwitcher } from "./locale-switcher";

test.describe("LocaleSwitcher", () => {
  test("should render component", async ({ mount, page }) => {
    const component = await mount(<LocaleSwitcher />);
    await expect(component.getByRole("combobox")).toBeVisible();
  });

  test("should allow change locale", async ({ mount, page }) => {
    const component = await mount(<LocaleSwitcher />);
    const select = component.getByRole("combobox");
    await expect(select).toBeVisible();
    select.selectOption("pt");
    await expect(page).toHaveURL("/pt");
    select.selectOption("en");
    await expect(page).toHaveURL("/en");
  });
});
