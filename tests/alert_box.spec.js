import { test, expect } from '@playwright/test';

test('handling alert box', async ({ page }) => {
 
  page.on('dialog', async Dialog => {

    console.log(`Alert message: $(dialog.message()}`);
    expect(Dialog.message()).toContain('I am an alert box!');
    await Dialog.accept();
  });
   await page.goto('https://testpages.eviltester.com/pages/basics/alerts-javascript/');
  await page.locator('#alertexamples').click();
})