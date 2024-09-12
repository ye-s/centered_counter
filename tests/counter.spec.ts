import { test, expect } from '@playwright/test';

test.describe('Counter Application', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/'); // Assuming your app is served at the root URL
  });

  test('displays the initial count as 0', async ({ page }) => {
    const count = await page.textContent('.current-count');
    expect(count).toBe('0');
  });

  test('increments the count when the button is clicked', async ({ page }) => {
    await page.click('.count-button');
  
    const count = await page.textContent('.current-count');
    expect(count).toBe('1');
  });

  test('updates the count based on the "Start at" input', async ({ page }) => {
    await page.fill('#start-at', '5');
    await page.click('.count-button');
  
    const count = await page.textContent('.current-count');
    expect(count).toBe('6');
  });

  test('updates the count based on the "Step" input', async ({ page }) => {
    await page.fill('#step', '3');
    await page.click('.count-button');
  
    const count = await page.textContent('.current-count');
    expect(count).toBe('3');
  });

  test('combines "Start at" and "Step" inputs correctly', async ({ page }) => {
    await page.fill('#start-at', '10');
    await page.fill('#step', '5');
    await page.click('.count-button');
    await page.click('.count-button');
    await page.click('.count-button');

    const count = await page.textContent('.current-count');
    expect(count).toBe('25');
  });

  test('has proper aria labels for accessibility', async ({ page }) => {
    const buttonAriaLive = await page.getAttribute('.count-button', 'aria-live');
    expect(buttonAriaLive).toBe('polite');

    const startAtAriaDescribedBy = await page.getAttribute('#start-at', 'aria-describedby');
    expect(startAtAriaDescribedBy).toBe('start-at-desc');

    const stepAriaDescribedBy = await page.getAttribute('#step', 'aria-describedby');
    expect(stepAriaDescribedBy).toBe('step-desc');
  });
});