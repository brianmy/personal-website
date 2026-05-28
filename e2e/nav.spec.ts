import { test, expect } from "@playwright/test";

test.describe("Navigation — desktop", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("shows all five links", async ({ page }) => {
    const nav = page.locator("header nav .hidden");
    await expect(nav.getByRole("link", { name: "Work" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Side Quest" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "About" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Contact" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Resume" })).toBeVisible();
  });

  test("Resume opens in a new tab", async ({ page }) => {
    const resume = page.locator("header nav").getByRole("link", { name: "Resume" });
    await expect(resume).toHaveAttribute("target", "_blank");
  });

  test("Work link scrolls to Work section label", async ({ page }) => {
    await page.locator("header nav").getByRole("link", { name: "Work" }).click();
    await page.waitForTimeout(600);
    await expect(page.getByRole("heading", { name: "Selected case studies" })).toBeInViewport();
  });

  test("Side Quest link scrolls to Side Quest section", async ({ page }) => {
    await page.locator("header nav").getByRole("link", { name: "Side Quest" }).click();
    await page.waitForTimeout(600);
    await expect(page.getByRole("heading", { name: "Support Space" })).toBeInViewport();
  });

  test("About link scrolls to About section", async ({ page }) => {
    await page.locator("header nav").getByRole("link", { name: "About" }).click();
    await page.waitForTimeout(600);
    await expect(page.getByRole("heading", { name: "The PM behind" })).toBeInViewport();
  });

  test("Contact link scrolls to Contact section", async ({ page }) => {
    await page.locator("header nav").getByRole("link", { name: "Contact" }).click();
    await page.waitForTimeout(600);
    await expect(page.getByRole("heading", { name: "Let's talk." })).toBeInViewport();
  });
});

test.describe("Navigation — mobile", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("desktop nav is hidden, hamburger is visible", async ({ page }) => {
    await expect(page.locator("header nav .hidden.md\\:flex")).not.toBeVisible();
    await expect(page.getByRole("button", { name: "Toggle menu" })).toBeVisible();
  });

  test("hamburger opens dropdown with all links", async ({ page }) => {
    await page.getByRole("button", { name: "Toggle menu" }).click();
    await expect(page.getByRole("link", { name: "Work" }).last()).toBeVisible();
    await expect(page.getByRole("link", { name: "Side Quest" })).toBeVisible();
    await expect(page.getByRole("link", { name: "About" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();
  });

  test("clicking a dropdown link closes the menu", async ({ page }) => {
    await page.getByRole("button", { name: "Toggle menu" }).click();
    await page.getByRole("link", { name: "About" }).click();
    await expect(page.getByRole("button", { name: "Toggle menu" })).toBeVisible();
    // Dropdown should be gone
    const dropdown = page.locator("header .md\\:hidden.absolute");
    await expect(dropdown).not.toBeVisible();
  });
});
