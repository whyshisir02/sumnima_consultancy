import { test, expect } from "@playwright/test";
test("all bilingual pages render and language switching preserves the page", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const lang of ["en", "ne"])
    for (const slug of [
      "",
      "about/",
      "services/",
      "projects/",
      "gallery/",
      "contact/",
      "privacy/",
    ]) {
      const response = await page.goto(`/${lang}/${slug}`);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("html")).toHaveAttribute("lang", lang);
      expect(
        await page
          .locator("body")
          .evaluate((el) => el.scrollWidth <= window.innerWidth),
      ).toBe(true);
    }
  await page.goto("/en/services/");
  await page.getByRole("link", { name: "Switch to Nepali" }).click();
  await expect(page).toHaveURL(/\/ne\/services\//);
  await expect(page.locator("h1")).toContainText("सेवाहरू");
  expect(errors).toEqual([]);
});
test("WhatsApp enquiry validates inputs and prepares the confirmed destination", async ({
  page,
}) => {
  await page.goto("/en/contact/");
  await page.getByRole("button", { name: "Prepare WhatsApp enquiry" }).click();
  await expect(page.getByText("Your message is ready.")).toHaveCount(0);
  await page.getByLabel("Full name").fill("Website Test");
  await page.getByLabel("Phone number").fill("9841000000");
  await page.getByLabel("Email (optional)").fill("test@example.com");
  await page
    .getByLabel("I’m interested in")
    .selectOption({ label: "Building Design & Planning" });
  await page
    .getByLabel("About your project")
    .fill("Planning a residential building in Dharan.");
  await page.getByLabel("Phone number").fill("invalid-phone");
  await page.getByRole("button", { name: "Prepare WhatsApp enquiry" }).click();
  await expect(page.getByText("Your message is ready.")).toHaveCount(0);
  await page.getByLabel("Phone number").fill("9841000000");
  await page.getByRole("button", { name: "Prepare WhatsApp enquiry" }).click();
  const link = page.getByRole("link", { name: "Continue to WhatsApp" });
  await expect(link).toBeVisible();
  const url = new URL((await link.getAttribute("href"))!);
  expect(url.pathname).toBe("/9779843349239");
  expect(url.searchParams.get("text")).toContain("Website Test");
  expect(url.searchParams.get("text")).toContain("Building Design & Planning");
  await page.getByLabel("Full name").fill("Revised name");
  await expect(link).toHaveCount(0);
});
test("mobile navigation, layout, images, and screenshots", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/en/");
  await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.locator("#mobile-navigation")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Open menu" })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await page.getByRole("button", { name: "Open menu" }).click();
  await page
    .locator("#mobile-navigation")
    .getByRole("link", { name: "Services", exact: true })
    .click();
  await expect(page).toHaveURL(/\/en\/services\//);
  for (const lang of ["en", "ne"])
    for (const slug of [
      "",
      "about/",
      "services/",
      "projects/",
      "gallery/",
      "contact/",
      "privacy/",
    ]) {
      await page.goto(`/${lang}/${slug}`);
      expect(
        await page
          .locator("body")
          .evaluate((el) => el.scrollWidth <= window.innerWidth),
        `${lang}/${slug} overflows`,
      ).toBe(true);
    }
  await page.goto("/en/");
  for (const img of await page.locator("img").all()) {
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        img.evaluate(
          (el) =>
            (el as HTMLImageElement).complete &&
            (el as HTMLImageElement).naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({
    path: "test-results/home-mobile.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.screenshot({
    path: "test-results/home-desktop.png",
    fullPage: true,
  });
  await page.goto("/en/contact/");
  await page.screenshot({
    path: "test-results/contact-desktop.png",
    fullPage: true,
  });
  for (const width of [320, 768]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ["/en/", "/ne/", "/en/contact/", "/ne/contact/"]) {
      await page.goto(route);
      expect(
        await page
          .locator("body")
          .evaluate((el) => el.scrollWidth <= innerWidth),
        `${route} at ${width}px`,
      ).toBe(true);
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/ne/");
  await page.screenshot({
    path: "test-results/home-nepali.png",
    fullPage: true,
  });
});
