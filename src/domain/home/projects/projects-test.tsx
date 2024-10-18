import { test, expect } from '@playwright/experimental-ct-react';
import { Projects } from "./projects";
import { ProjectsMocks } from './projects-mocks';

test.describe("Projects", () => {
  test("should render section", async ({ mount }) => {
    const component = await mount(<Projects projects={ProjectsMocks.projects} />);
    await expect(component.getByText("Projects")).toBeVisible();
  });
});
