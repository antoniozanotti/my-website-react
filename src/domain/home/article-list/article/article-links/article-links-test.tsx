import { test, expect } from "@playwright/experimental-ct-react";
import { ArticleLinks } from "./article-links";

test.describe("ArticleLinks", () => {
  test("should not render component", async ({ mount }) => {
    const component = await mount(<ArticleLinks />);
    await expect(component.locator(":scope:is(ul)")).toHaveCount(0);
  });

  test("should render ul, li, a", async ({ mount, context }) => {
    const component = await mount(
      <ArticleLinks
        links={[
          { link: "https://www.google.com/", label: "Google" },
          { link: "https://www.linkedin.com/", label: "LinkedIn" },
        ]}
      />
    );
    await expect(component.locator(":scope:is(ul)")).toBeVisible();
    await expect(component.getByRole("listitem")).toHaveCount(2);
    await expect(component.getByRole("link")).toHaveCount(2);
    const pagePromise = context.waitForEvent('page');
    component.getByRole("link").first().click();
    const newPage = await pagePromise;
    await expect(newPage).toHaveURL("https://www.google.com/");
  });
});
