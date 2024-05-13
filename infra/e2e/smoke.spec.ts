import { test, expect } from "@playwright/test";

test("Main page", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "cordian" })).toBeVisible();
});
