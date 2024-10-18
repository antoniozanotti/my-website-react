import { test, expect } from "@playwright/experimental-ct-react";
import { LocaleSwitcherSelect } from "./locale-switcher-select";

test.describe("LocaleSwitcher", () => {
  test("should render component", async ({ mount, page }) => {  
    const component = await mount(
      <LocaleSwitcherSelect defaultValue="en" label="Change Language">
        <option value="en">English</option>
        <option value="pt">Português</option>
      </LocaleSwitcherSelect>
    );
    await expect(component.getByRole("option")).toHaveCount(2);    
  });
});
