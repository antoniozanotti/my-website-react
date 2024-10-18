import { test, expect } from '@playwright/experimental-ct-react';
import { SocialMedia } from "./social-media";

test.describe("SocialMedia", () => {
  test("should render elements", async ({ mount }) => {
    const component = await mount(<SocialMedia />);
    await expect(component.locator(":scope:is(div)")).toBeVisible();
    await expect(component.getByRole("link")).toHaveCount(2);
  });

  test("should allow click on links", async ({ mount, context }) => {
    const component = await mount(<SocialMedia />);
    
    const pageLinkedInPromise = context.waitForEvent('page');
    component.getByTitle("Linked In").click();
    const newPageLinkedIn = await pageLinkedInPromise;
    await expect(newPageLinkedIn).toHaveURL("https://www.linkedin.com/in/antoniozanotti/");

    const pageGitHubPromise = context.waitForEvent('page');
    component.getByTitle("GitHub").click();
    const newPageGitHub = await pageGitHubPromise;
    await expect(newPageGitHub).toHaveURL("https://github.com/antoniozanotti");
    
  });
});
