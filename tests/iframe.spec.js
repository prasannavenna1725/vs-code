import { test, expect } from '@playwright/test';

test('iframes program', async ({ page }) => {
    await page.goto('https://www.w3schools.com/tags/tryit.asp? filename = tryhtml_button_test')
})
//switch to iframe
const iframe = page.framelocator('#iframeResult');

//clcik button inside iframe
await iframe.locator('button').click()

// test('iframes program', async ({ page }) => 
//     {

//     await page.goto('https://www.w3schools.com/tags/tryit.asp? filename = tryhtml_button_test')
// })
// await page.waitForSelector('#iframeResult');

// const frame = page.framelocator({url:/tryhtml_button_test/});

// await frame.click('button');
// page.on('dialog',dialog => dialog.accept());
//});


