import { test, expect } from "@playwright/experimental-ct-react";
import { ArticleListContainer } from "./article-list-container";
import { ExperienceMocks } from "../experience/experience-mocks";

test.describe("ArticleListContainer", () => {
  test("should render component", async ({ mount }) => {
    const component = await mount(
      <ArticleListContainer
        articles={ExperienceMocks.positions}
        labelForMore="LabelForMore"
      />
    );
    await expect(component.getByText(ExperienceMocks.positions[0].title)).toBeVisible();
  });
});
