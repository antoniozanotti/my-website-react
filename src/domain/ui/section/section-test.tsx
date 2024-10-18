import { test, expect } from "@playwright/experimental-ct-react";
import { Section } from "./section";

test.describe("Section", () => {
  test("should render section", async ({ mount }) => {
    const component = await mount(<Section title="Test Title" />);
    await expect(component.locator(":scope:is(section)")).toHaveCount(1);
  });

  test("should accept anchor", async ({ mount }) => {
    const component = await mount(<Section  title="Test Title" anchor="TestId" />);
    await expect(component.locator("h2")).toHaveId("TestId");
  });

  test("should accept className", async ({ mount }) => {
    const component = await mount(<Section  title="Test Title" className='test' />);
    await expect(component).toHaveClass(/test$/);
  });

  test("should render children", async ({ mount }) => {
    const component = await mount(<Section title="Test Title"><span>Children</span></Section>);
    await expect(component.locator("span")).toHaveText("Children");
  });
});
