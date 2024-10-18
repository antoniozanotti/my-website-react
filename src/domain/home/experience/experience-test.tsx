import { test, expect } from '@playwright/experimental-ct-react';
import { Experience } from "./experience";
import { ExperienceMocks } from './experience-mocks';

test.describe("Experience", () => {
  test("should render section", async ({ mount }) => {
    const component = await mount(<Experience positions={ExperienceMocks.positions} />);
    await expect(component.locator(":scope:is(section)")).toBeVisible();
  });
});
