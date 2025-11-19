import { test, expect } from '@playwright/test';

test('Page loads and has the correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('PyTricks Archive');
});

test('Headline is present', async ({ page }) => {
  await page.goto('/');
  const headline = page.locator('h1.headline');
  await expect(headline).toBeVisible();
  await expect(headline).toHaveText('Real Python PyTricks Archive');
});

test('All trick titles are present', async ({ page }) => {
  await page.goto('/');
  const trickTitles = page.locator('h2');
  const count = await trickTitles.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    await expect(trickTitles.nth(i)).toBeVisible();
  }
});

test('Anchor links work correctly', async ({ page }) => {
  await page.goto('/');
  const anchorLinks = page.locator('a.heading-link');
  const count = await anchorLinks.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    const link = anchorLinks.nth(i);
    const href = await link.getAttribute('href');
    await link.click();
    await expect(page).toHaveURL(href);
  }
});

test('Footer links are present and correct', async ({ page }) => {
  await page.goto('/');
  const contributeLink = page.locator('a[href="https://github.com/willtheorangeguy/PyTricks-Archive"]');
  await expect(contributeLink).toBeVisible();
  await expect(contributeLink).toHaveText('Contribute!');

  const privacyLink = page.locator('a[href="legal/privacy.html"]');
  await expect(privacyLink).toBeVisible();
  await expect(privacyLink).toHaveText('Privacy Policy');

  const termsLink = page.locator('a[href="legal/terms.html"]');
  await expect(termsLink).toBeVisible();
  await expect(termsLink).toHaveText('Terms of Service');
});
