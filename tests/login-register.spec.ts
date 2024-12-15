import { test, expect } from '@playwright/test';

// Define a test suite for authentication tests
test.describe('Authentication Tests', () => {
  const baseUrl = 'https://onlinelibrary.wiley.com/'; 

  test('Verify that a user can successfully log in with valid credentials', async ({ page }) => {
    await page.goto(`${baseUrl}/login`);// Navigate to the login page
    await page.fill('#Email', 'wickramarachchivishmi@gmail.com'); // Enter a valid email address in the email input field
    await page.click('#Continue');
    await expect(page).toHaveURL(`${baseUrl}/dashboard`); // Assert that the page URL changes to the dashboard URL
    await expect(page.locator('h1')).toHaveText('Welcome to Your Dashboard');
  });

  test('Verify that login fails when incorrect credentials are used', async ({ page }) => {
    await page.goto(`${baseUrl}/login`);
    await page.fill('#email-input', 'invaliduser@example.com'); // Enter an invalid email address
    await page.click('#continue-button'); // Click the "Continue" button
    const errorMessage = page.locator('#error-message');
    await expect(errorMessage).toBeVisible(); // Assert that the error message is visible on the page
    await expect(errorMessage).toHaveText('Please enter a valid e-mail address');
  });

  test('Verify that a user can successfully register with valid credentials', async ({ page }) => {
    await page.goto(`${baseUrl}/register`);// Navigate to the registration page
    await page.fill('#email-input', 'wickramarchchidilusha@gmail.com');
    await page.click('#continue-button');
    await expect(page).toHaveURL(`${baseUrl}/dashboard`); // Assert that the page URL changes to the dashboard URL after successful registration
    await expect(page.locator('h1')).toHaveText('Welcome to Your Dashboard');
  });
});
