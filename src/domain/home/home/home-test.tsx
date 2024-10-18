import { test, expect } from "@playwright/experimental-ct-react";
import { Home } from "./home";
import { HomeMocks } from "./home-mocks";

test.describe("Home", () => {
  test("should render home", async ({ mount }) => {
    const component = await mount(
      <Home
        aboutParagraphs={HomeMocks.aboutParagraphs}
        projects={HomeMocks.projects}
        positions={HomeMocks.positions}
      />
    );
    await expect(component).toContainText(HomeMocks.aboutParagraphs[0]);
    await expect(component).toContainText(HomeMocks.projects[0].title);
    await expect(component).toContainText(HomeMocks.positions[0].title);
  });
});
