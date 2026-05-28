import { test, expect } from "@playwright/test";

test.describe("Hero section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("headline is visible", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /Driven by customer obsession/ })
    ).toBeVisible();
  });

  test("'See my work' CTA points to #work", async ({ page }) => {
    const cta = page.getByRole("link", { name: "See my work" });
    await expect(cta).toHaveAttribute("href", "#work");
  });

  test("'Get in touch' CTA points to #contact", async ({ page }) => {
    const cta = page.getByRole("link", { name: "Get in touch" });
    await expect(cta).toHaveAttribute("href", "#contact");
  });
});

test.describe("Work section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() =>
      document.getElementById("work")?.scrollIntoView()
    );
  });

  test("shows all three case study headings", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Reinvigorating Growth at Zendesk" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Growing Amazon Music at Scale" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "0→1 Launch of Balance Transfer Personal Loans" })).toBeVisible();
  });

  test("shows outcome stats for all three cases", async ({ page }) => {
    await expect(page.getByText("170%", { exact: true })).toBeVisible();
    await expect(page.getByText("104%", { exact: true })).toBeVisible();
    await expect(page.getByText("~$900", { exact: true })).toBeVisible();
  });

  test("Amazon image loads without error", async ({ page }) => {
    const img = page.getByAltText("Amazon Music discovery experience on amazon.com");
    await img.scrollIntoViewIfNeeded();
    await page.waitForFunction(
      (alt) => {
        const el = document.querySelector<HTMLImageElement>(`img[alt="${alt}"]`);
        return !!(el && el.complete && el.naturalWidth > 0);
      },
      "Amazon Music discovery experience on amazon.com",
      { timeout: 10000 }
    );
  });

  test("LendingClub image loads without error", async ({ page }) => {
    const img = page.getByAltText("LendingClub balance transfer product");
    await img.scrollIntoViewIfNeeded();
    await page.waitForFunction(
      (alt) => {
        const el = document.querySelector<HTMLImageElement>(`img[alt="${alt}"]`);
        return !!(el && el.complete && el.naturalWidth > 0);
      },
      "LendingClub balance transfer product",
      { timeout: 10000 }
    );
  });
});

test.describe("Side Quest section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() =>
      document.getElementById("projects")?.scrollIntoView()
    );
  });

  test("shows Support Space heading", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Support Space" })).toBeVisible();
  });

  test("RPG screenshots load without error", async ({ page }) => {
    const alts = [
      "Support Space RPG title screen",
      "Support Space RPG gameplay showing a trivia battle",
    ];
    for (const alt of alts) {
      await page.getByAltText(alt).scrollIntoViewIfNeeded();
      await page.waitForFunction(
        (a) => {
          const el = document.querySelector<HTMLImageElement>(`img[alt="${a}"]`);
          return !!(el && el.complete && el.naturalWidth > 0);
        },
        alt,
        { timeout: 10000 }
      );
    }
  });

  test("'Play the game' links to the live game in a new tab", async ({ page }) => {
    const link = page.getByRole("link", { name: /Play the game/ });
    await expect(link).toHaveAttribute("href", "https://zendesk-rpg.vercel.app/");
    await expect(link).toHaveAttribute("target", "_blank");
  });

  test("'View source' links to GitHub in a new tab", async ({ page }) => {
    const link = page.getByRole("link", { name: /View source/ });
    await expect(link).toHaveAttribute("href", "https://github.com/brianmy-zendesk/zendesk-rpg");
    await expect(link).toHaveAttribute("target", "_blank");
  });
});

test.describe("Contact section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() =>
      document.getElementById("contact")?.scrollIntoView()
    );
  });

  test("email link is correct", async ({ page }) => {
    const link = page.getByRole("link", { name: /brian\.my@gmail\.com/ });
    await expect(link).toHaveAttribute("href", "mailto:brian.my@gmail.com");
  });

  test("LinkedIn link opens in a new tab", async ({ page }) => {
    const link = page.getByRole("link", { name: /LinkedIn/ });
    await expect(link).toHaveAttribute("href", "https://www.linkedin.com/in/brianmy");
    await expect(link).toHaveAttribute("target", "_blank");
  });

  test("Resume link opens in a new tab", async ({ page }) => {
    // There are two Resume links; the one in Contact is inside the contact section
    const link = page.locator("#contact").getByRole("link", { name: /Resume/ });
    await expect(link).toHaveAttribute("target", "_blank");
  });
});
