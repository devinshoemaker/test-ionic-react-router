import { test, expect } from "@playwright/test";

test.describe("Routes", () => {
  test("init", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("strong")).toHaveText("Inbox");
    
    await page.reload();
    await expect(page.getByRole("strong")).toHaveText("Inbox");
    
    await page.locator('#inbox-list').getByText('Outbox').click();
    await expect(page.getByRole("strong")).toHaveText("Outbox");
    await page.reload();
    await expect(page.getByRole("strong")).toHaveText("Outbox");
  });
});
