import { test, expect } from "@playwright/experimental-ct-react";
import { Heading } from "./heading";

test.describe("Heading", () => {
  test("should render default props", async ({ mount }) => {
    const component = await mount(<Heading title="Test" />);
    await expect(component.locator(":scope:is(h1)")).toContainText("Test");
  });

  test("should render h1", async ({ mount }) => {
    const component = await mount(<Heading title="Test" level="h1" />);
    await expect(component.locator(":scope:is(h1)")).toContainText("Test");
  });

  test("should render h2", async ({ mount }) => {
    const component = await mount(<Heading title="Test" level="h2" />);
    await expect(component.locator(":scope:is(h2)")).toContainText("Test");
  });

  test("should render h3", async ({ mount }) => {
    const component = await mount(<Heading title="Test" level="h3" />);
    await expect(component.locator(":scope:is(h3)")).toContainText("Test");
  });

  test("should render h4", async ({ mount }) => {
    const component = await mount(<Heading title="Test" level="h4" />);
    await expect(component.locator(":scope:is(h4)")).toContainText("Test");
  });

  test("should accept anchor", async ({ mount }) => {
    const component = await mount(<Heading title="Test" anchor="testid" />);
    await expect(component.locator(":scope")).toHaveId("testid");
  });

  test("should accept className", async ({ mount }) => {
    const component = await mount(<Heading title="Test" className="test" />);
    await expect(component).toHaveClass(/test$/);
  });
});
