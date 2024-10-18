import { test, expect } from '@playwright/experimental-ct-react';
import { About } from "./about";
import { AboutMocks } from './about-mocks';

test.describe("About", () => {
  test("should render paragraphs", async ({ mount }) => {
    const component = await mount(<About paragraphs={AboutMocks.paragraphs} />);
    await expect(component).toContainText(AboutMocks.paragraphs[0]);
    await expect(component).toContainText(AboutMocks.paragraphs[1]);
  });
});
