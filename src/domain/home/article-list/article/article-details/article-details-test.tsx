import { test, expect } from '@playwright/experimental-ct-react';
import { ArticleDetails } from "./article-details";

test.describe("ArticleDetails", () => {
  test("should render default props", async ({ mount }) => {
    const component = await mount(<ArticleDetails company='Company' period='Period' />);
    await expect(component.locator(":scope:is(div)")).toHaveCount(1);
    await expect(component).toContainText("Company");
    await expect(component).toContainText("Period");
  });

  test("should accept location", async ({ mount }) => {
    const component = await mount(<ArticleDetails company='Company' period='Period' className='test' location='Location' />);
    await expect(component).toContainText("Location");
  });

  test("should accept skills", async ({ mount }) => {
    const component = await mount(<ArticleDetails company='Company' period='Period' className='test' skills={["Skill1", "Skill2"]} />);
    await expect(component).toContainText("Skill1");
    await expect(component).toContainText("Skill2");
  });

  test("should accept className", async ({ mount }) => {
    const component = await mount(<ArticleDetails company='Company' period='Period' className='test' />);
    await expect(component).toHaveClass(/test$/);
  });
});
