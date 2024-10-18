import { test, expect } from "@playwright/experimental-ct-react";
import { ArticleParagraphsStory } from "./article-paragraphs-story";

test.describe("ArticleParagraphs", () => {
  test("should render paragraphs and handle callbacks", async ({ mount }) => {
    let isOpen = false;
    const component = await mount(
      <ArticleParagraphsStory
        paragraphs={["Paragraph1", "Paragraph2"]}
        setIsOpen={(isOpenParam) => {
          isOpen = isOpenParam;
        }}
      />
    );
    await expect(component.locator(":scope:is(div)")).toBeVisible();
    await expect(component.getByRole("paragraph")).toHaveCount(2);
    await expect(component).toContainText("Paragraph1");
    await expect(component).toContainText("Paragraph2");
    await component.getByText("See more").first().click();
    expect(isOpen).toBeTruthy();
  });
});
