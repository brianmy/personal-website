import { test, expect } from "@playwright/test";

const GREEN = "rgb(74, 124, 89)";
const GRAY = "rgb(209, 213, 219)";

test.describe("Zendesk carousel", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() =>
      document.getElementById("work")?.scrollIntoView()
    );
    // Wait for the carousel to hydrate
    await page.waitForSelector('button[aria-label="Go to slide 1"]');
  });

  test("first slide is active on load", async ({ page }) => {
    const firstDot = page.locator('button[aria-label="Go to slide 1"] span');
    await expect(firstDot).toHaveCSS("background-color", GREEN);
  });

  test("auto-advances to slide 2 after ~4 seconds", async ({ page }) => {
    const firstDot = page.locator('button[aria-label="Go to slide 1"] span');
    const secondDot = page.locator('button[aria-label="Go to slide 2"] span');

    await expect(firstDot).toHaveCSS("background-color", GREEN);
    await page.waitForTimeout(4500);
    await expect(firstDot).toHaveCSS("background-color", GRAY);
    await expect(secondDot).toHaveCSS("background-color", GREEN);
  });

  test("clicking a dot jumps to that slide", async ({ page }) => {
    await page.click('button[aria-label="Go to slide 4"]');
    const fourthDot = page.locator('button[aria-label="Go to slide 4"] span');
    await expect(fourthDot).toHaveCSS("background-color", GREEN);
  });

  test("dot buttons meet minimum touch target size", async ({ page }) => {
    const button = page.locator('button[aria-label="Go to slide 1"]');
    const box = await button.boundingBox();
    expect(box?.width).toBeGreaterThanOrEqual(24);
    expect(box?.height).toBeGreaterThanOrEqual(24);
  });
});
