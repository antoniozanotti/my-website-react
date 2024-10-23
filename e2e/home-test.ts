import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en");
  });

  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("should match dark theme", async ({ page }) => {
    await expect(page).toHaveScreenshot({ maxDiffPixels: 500 });
  });

  test("should match light theme", async ({ page }) => {
    const button = page.locator('//*[@aria-label="Toggle Theme"]');

    await button.click();

    await expect(page).toHaveScreenshot({ maxDiffPixels: 500 });
  });

  test("should allow change language", async ({ page }) => {
    const select = page.getByRole("combobox");

    await select.selectOption("pt");

    const sobreTitle = page.getByRole("heading", { level: 2, name: "Sobre" });
    await expect(sobreTitle).toBeVisible();

    await select.selectOption("en");

    const aboutTitle = page.getByRole("heading", { level: 2, name: "About" });
    await expect(aboutTitle).toBeVisible();
  });

  test("should go to About Section", async ({ page }) => {
    const button = page.locator('//*[@aria-label="Go to About Section"]');

    await button.click();

    const aboutTitle = page.getByRole("heading", { level: 2, name: "About" });

    await expect(aboutTitle).toBeInViewport();
  });

  test("should show full employment history", async ({ page }) => {
    const h3Qty = await page.getByRole("heading", { level: 3, includeHidden: false }).all();
    const button = page.getByText("See full employment history");

    await button.click();

    const h3Qty2 = await page.getByRole("heading", { level: 3, includeHidden: false }).all();

    await expect(h3Qty.length).toBeLessThan(h3Qty2.length);
  });

  test("should send message", async ({ page }) => {
    const nameField = page.getByLabel("Name");
    const emailField = page.getByLabel("Email");
    const messageField = page.getByLabel("Message");
    const button = page.getByRole("button", { name: "Submit" });

    await nameField.fill("Antônio Zanotti");
    await emailField.fill("antoniorzanotti@gmail.com");
    await messageField.fill("Test");
    await button.click();

    const successMessage = page.getByText("Thank you for the message sent.");

    await expect(successMessage).toBeVisible();
  });

  test("should validate fields", async ({ page }) => {
    const nameField = page.getByLabel("Name");
    const emailField = page.getByLabel("Email");
    const messageField = page.getByLabel("Message");
    const button = page.getByRole("button", { name: "Submit" });

    await button.click();

    await expect(nameField).toBeFocused();

    await nameField.fill("Antônio Zanotti");

    await button.click();

    await expect(emailField).toBeFocused();

    await emailField.fill("antoniorzanotti@gmail.com");

    await button.click();

    await expect(messageField).toBeFocused();

    await emailField.fill("antoniorzanotti");

    await button.click();

    await expect(emailField).toBeFocused();
  });

  test("should go to Top Page", async ({ page }) => {
    const button = page.locator('//*[@aria-label="Go to Top Page"]');

    await button.click();

    const nameTitle = page.getByRole("heading", { level: 1, name: "Antônio Zanotti" });

    await expect(nameTitle).toBeInViewport();
  });
});
